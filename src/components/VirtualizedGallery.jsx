import { useState, useEffect, useRef, useMemo } from 'react';
import LazyImage from './LazyImage.jsx';
import ImageModal from './ImageModal.jsx';
import './VirtualizedGallery.css';

const VirtualizedGallery = ({ 
  images, 
  itemsPerRow = { mobile: 1, tablet: 2, desktop: 3 }, // Actualizado: 1 mobile, 3 desktop
  itemHeight = 280, // Más grande por defecto
  gap = 20, // Más espacio entre imágenes
  className = ''
}) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [currentItemsPerRow, setCurrentItemsPerRow] = useState(itemsPerRow.desktop);
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const containerRef = useRef(null);
  const scrollElementRef = useRef(null);

  // Calculate responsive items per row
  useEffect(() => {
    const updateItemsPerRow = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setCurrentItemsPerRow(itemsPerRow.mobile);
      } else if (width <= 1024) {
        setCurrentItemsPerRow(itemsPerRow.tablet);
      } else {
        setCurrentItemsPerRow(itemsPerRow.desktop);
      }
    };

    updateItemsPerRow();
    window.addEventListener('resize', updateItemsPerRow);
    return () => window.removeEventListener('resize', updateItemsPerRow);
  }, [itemsPerRow]);

  // Calculate dimensions
  const totalRows = Math.ceil(images.length / currentItemsPerRow);
  const totalHeight = totalRows * (itemHeight + gap) - gap;
  
  // Calculate visible range with buffer
  const overscan = 2; // Render 2 extra rows above and below
  const startRow = Math.max(0, Math.floor(scrollTop / (itemHeight + gap)) - overscan);
  const endRow = Math.min(
    totalRows - 1,
    Math.ceil((scrollTop + viewportHeight) / (itemHeight + gap)) + overscan
  );

  // Get visible items
  const visibleItems = useMemo(() => {
    const items = [];
    for (let row = startRow; row <= endRow; row++) {
      for (let col = 0; col < currentItemsPerRow; col++) {
        const index = row * currentItemsPerRow + col;
        if (index < images.length) {
          const image = images[index];
          items.push({
            ...image,
            index,
            row,
            col,
            top: row * (itemHeight + gap),
            left: col * (100 / currentItemsPerRow) + '%',
            width: `calc(${100 / currentItemsPerRow}% - ${gap * (currentItemsPerRow - 1) / currentItemsPerRow}px)`
          });
        }
      }
    }
    return items;
  }, [images, startRow, endRow, currentItemsPerRow, itemHeight, gap]);

  // Handle scroll
  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  // Update viewport height
  useEffect(() => {
    const updateViewportHeight = () => {
      if (containerRef.current) {
        setViewportHeight(containerRef.current.clientHeight);
      }
    };

    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  // Handle image click - open modal
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  // Handle modal navigation
  const handleModalNavigate = (newIndex) => {
    setSelectedImageIndex(newIndex);
  };

  // Handle modal close
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div 
        ref={containerRef}
        className={`virtualized-gallery ${className}`}
        onScroll={handleScroll}
      >
        {/* Virtual container with total height */}
        <div 
          className="virtualized-gallery-container"
          style={{ height: totalHeight }}
        >
          {/* Visible items */}
          {visibleItems.map((item, idx) => (
            <div
              key={item.index}
              className="virtualized-gallery-item"
              style={{
                position: 'absolute',
                top: item.top,
                left: item.left,
                width: item.width,
                height: itemHeight,
              }}
              onClick={() => handleImageClick(item.index)}
            >
              <LazyImage
                src={item.src}
                alt={item.alt}
                priority={idx < 6} // Prioritize first 6 images
                aspectRatio="1/1"
                className="gallery-image clickable"
              />
            </div>
          ))}
        </div>

        {/* Loading indicator for scroll */}
        {images.length === 0 && (
          <div className="virtualized-gallery-loading">
            <div className="loading-spinner" />
            <p>Cargando galería...</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        image={images[selectedImageIndex]}
        images={images}
        currentIndex={selectedImageIndex}
        onNavigate={handleModalNavigate}
      />
    </>
  );
};

export default VirtualizedGallery; 