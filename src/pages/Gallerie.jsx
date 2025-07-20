import { galleryImages } from '../assets/images';
import classes from "./Gallerie.module.css";

const Gallerie = () => {
  return (
    <div className={classes.big_container}>
      <div className={classes.container_1}>
        <div className={classes.section_title}>
          <h3>Galerie</h3>
        </div>
        <div className={classes.grid_container}>
          {galleryImages.map((image) => (
            <div key={image.id} className={classes.grid_item}>
              <img 
                style={{ width: "100%" }} 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallerie;
