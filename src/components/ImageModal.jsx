import { useEffect } from 'react';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import LazyImage from './LazyImage.jsx';
import './ImageModal.css';

const ImageModal = ({ 
  isOpen, 
  onClose, 
  image, 
  images = [], 
  currentIndex = 0, 
  onNavigate 
}) => {
  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (onNavigate && currentIndex > 0) {
            onNavigate(currentIndex - 1);
          }
          break;
        case 'ArrowRight':
          if (onNavigate && currentIndex < images.length - 1) {
            onNavigate(currentIndex + 1);
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNavigate, currentIndex, images.length]);

  if (!isOpen || !image) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (onNavigate && currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (onNavigate && currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  return (
    <div className="image-modal-overlay" onClick={handleBackdropClick}>
      <div className="image-modal-container">
        {/* Close button */}
        <button 
          className="image-modal-close"
          onClick={onClose}
          aria-label="Cerrar imagen"
        >
          <IoClose size={32} />
        </button>

        {/* Navigation arrows */}
        {onNavigate && images.length > 1 && (
          <>
            <button
              className="image-modal-nav image-modal-nav-prev"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              aria-label="Imagen anterior"
            >
              <IoChevronBack size={32} />
            </button>
            
            <button
              className="image-modal-nav image-modal-nav-next"
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              aria-label="Imagen siguiente"
            >
              <IoChevronForward size={32} />
            </button>
          </>
        )}

        {/* Image container */}
        <div className="image-modal-content">
          <LazyImage
            src={image.src}
            alt={image.alt}
            priority={true}
            className="image-modal-img"
            aspectRatio="auto"
          />
          
          {/* Image counter */}
          <div className="image-modal-info">
            {onNavigate && images.length > 1 && (
              <p className="image-modal-counter">
                {currentIndex + 1} sur {images.length}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 