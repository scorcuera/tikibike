import { galleryImages } from '../assets/images';
import VirtualizedGallery from '../components/VirtualizedGallery.jsx';
import useImagePrefetch from '../hooks/useImagePrefetch.js';
import classes from "./Gallerie.module.css";

const Gallerie = () => {
  // Prefetch first few gallery images based on network conditions
  useImagePrefetch(galleryImages, {
    priority: 6, // Prefetch first 6 images
    delay: 200,  // Wait 200ms before starting prefetch
    connection: 'auto' // Auto-detect connection speed
  });

  return (
    <div className={classes.big_container}>
      <div className={classes.container_1}>
        <div className={classes.section_title}>
          <h3>Galerie</h3>
        </div>
        <div className={classes.gallery_wrapper}>
          <VirtualizedGallery
            images={galleryImages}
            itemsPerRow={{ mobile: 1, tablet: 2, desktop: 3 }}
            itemHeight={280}
            gap={20}
            className={classes.optimized_gallery}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallerie;
