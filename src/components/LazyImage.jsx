import { useState, useEffect, useRef } from 'react';
import './LazyImage.css';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  aspectRatio = '1/1',
  priority = false,
  preload = false,
  fetchPriority = 'auto'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Priority images load immediately
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (priority) return; // Skip observer for priority images

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Disconnect observer once image is in view
            observerRef.current?.disconnect();
          }
        });
      },
      {
        // Start loading when image is 200px away from viewport
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    const currentImg = imgRef.current;
    if (currentImg && observerRef.current) {
      observerRef.current.observe(currentImg);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  // Preload image for priority images
  useEffect(() => {
    if (preload && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [preload, src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true); // Stop loading state
  };

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      style={{ 
        aspectRatio,
        ...style 
      }}
    >
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div className="lazy-image-placeholder">
          <div className="lazy-image-skeleton" />
          <div className="lazy-image-loader">
            <div className="lazy-image-spinner" />
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="lazy-image-error">
          <span>⚠️</span>
          <p>Error loading image</p>
        </div>
      )}

      {/* Actual image - only render when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'lazy-image-loaded' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={fetchPriority}
        />
      )}
    </div>
  );
};

export default LazyImage; 