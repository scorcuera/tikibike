import { featuredImages } from '../assets/images';
import classes from "./Prices.module.css";

const Prices = () => {
  return (
    <div className={classes.imgContainer}>
      <img 
        className={classes.imgPrix} 
        src={featuredImages.prix} 
        alt="Precios Tikibike VTT" 
        loading="lazy"
      />
    </div>
  );
};

export default Prices;
