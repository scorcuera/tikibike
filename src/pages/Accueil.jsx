import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import useResponsive from "../hooks/useResponsive";
import LazyImage from '@/components/LazyImage.jsx';
import { featuredImages } from '@/assets/images';
import classes from "./Accueil.module.css";

const Accueil = () => {
  const { isSmallDevice, isMediumDevice } = useResponsive();

  return (
    <div className={classes.big_container}>
      <div className={classes.main_text}>
        <h1 className={classes.brand_name}>Tikibike</h1>
        <p className={classes.brand_subtitle}>l'école de vélo du pays des Écrins</p>
      </div>
      
      <div className={classes.background_img_container}>
        <LazyImage
        src={isSmallDevice ? featuredImages.background : featuredImages.backgroundMedium}
        alt="Tikibike - École de vélo du pays des Écrins"
          priority={true}
          className={classes.background_img}
          aspectRatio="auto"
      />
      </div>
      
      <div className={classes.footer_layer}>
        {isSmallDevice ? (
          <Link className={classes.button_footer} to="/sorties">
            <IoIosArrowDown size={48} />
          </Link>
        ) : isMediumDevice ? (
          <h3 className={classes.footer_text}>
            Venez rider en toute sécurité les meilleurs spots de VTT du pays des Ecrins
          </h3>
        ) : null}
      </div>
      
      <div className={classes.background_layer}></div>
    </div>
  );
};

export default Accueil;
