import { galleryImages } from '../assets/images/index.js';
import VirtualizedGallery from '../components/VirtualizedGallery.jsx';
import useImagePrefetch from '../hooks/useImagePrefetch.js';
import classes from "./Galerie.module.css";
import PageContainer from '../components/PageContainer.jsx';

const Galerie = () => {
  // Prefetch gallery images for better performance
  useImagePrefetch([
    galleryImages[0]?.src,
    galleryImages[1]?.src,
    galleryImages[2]?.src,
  ], {
    priority: 3,
    delay: 1000,
    connection: 'auto'
  });

  return (
    <div className={classes.page_container}>
      <div className={classes.page_title}>
        <h3>Galerie</h3>
      </div>
      <div className={classes.gallery_wrapper}>
        <VirtualizedGallery images={galleryImages} />
      </div>
      <div className={classes.page_footer_spacer} />
    </div>
  );
};

export default Galerie;
