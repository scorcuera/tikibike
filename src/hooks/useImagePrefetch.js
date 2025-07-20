import { useEffect } from 'react';

const useImagePrefetch = (images, options = {}) => {
  const {
    priority = 3, // Number of priority images to prefetch immediately
    delay = 100,  // Delay before starting prefetch (ms)
    connection = 'auto' // 'auto', 'fast', 'slow', 'disabled'
  } = options;

  useEffect(() => {
    // Check network conditions
    const getConnectionSpeed = () => {
      if (connection !== 'auto') return connection;
      
      // Check if Network Information API is available
      if ('connection' in navigator) {
        const conn = navigator.connection;
        const effectiveType = conn.effectiveType;
        
        if (effectiveType === '4g') return 'fast';
        if (effectiveType === '3g') return 'medium';
        return 'slow';
      }
      
      // Fallback: assume medium connection
      return 'medium';
    };

    const connectionSpeed = getConnectionSpeed();
    
    // Don't prefetch on slow connections
    if (connectionSpeed === 'slow' || connectionSpeed === 'disabled') {
      return;
    }

    // Determine how many images to prefetch based on connection
    const prefetchCount = connectionSpeed === 'fast' ? priority * 2 : priority;
    
    const prefetchImages = () => {
      const imagesToPrefetch = images.slice(0, prefetchCount);
      
      imagesToPrefetch.forEach((image, index) => {
        // Stagger prefetch requests to avoid overwhelming the browser
        setTimeout(() => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = image.src || image;
          link.as = 'image';
          
          // Add to document head
          document.head.appendChild(link);
          
          // Clean up after successful prefetch
          link.onload = () => {
            document.head.removeChild(link);
          };
          
          // Clean up on error
          link.onerror = () => {
            document.head.removeChild(link);
          };
        }, index * 50); // 50ms between each prefetch
      });
    };

    // Start prefetch after delay
    const timeoutId = setTimeout(prefetchImages, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [images, priority, delay, connection]);
};

export default useImagePrefetch; 