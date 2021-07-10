import classes from "./Accueil.module.css";
import backgroundImage from "../img/background-img.jpg";
import backgroundImageMedium from "../img/photos/allMountain/allMountain1.jpg";
import { useMediaQuery } from "react-responsive";
import {IoIosArrowDown} from "react-icons/io";
import { Link } from "react-router-dom";

const Accueil = () => {
  const isSmallDevice = useMediaQuery({
    query: '(max-width: 767px)'
  })
  const isMediumDevice = useMediaQuery({
    query : '(min-device-width: 768px)'
  })
    return (
      <div className={classes.big_container}>
        <div className={classes.main_text}>
          <h1 className={classes.brand_name}>Tikibike</h1>
          <p className={classes.brand_subtitle}>l'école de vélo du pays des Écrins</p>
        </div>
        <img
          className={classes.background_img}
          src={isSmallDevice ? backgroundImage : backgroundImageMedium }
          alt="Photo by Lachlan Cruickshank on Unsplash"
        />
        <div className={classes.footer_layer}>
          {isSmallDevice ? <Link className={classes.button_footer} to="/sorties">
            <a className={classes.button_link}>
              <IoIosArrowDown size={48} />
            </a>
          </Link> : isMediumDevice ? <h3 className={classes.footer_text}>Venir rider en toute sécurité les meilleurs spots de VTT du pays des Ecrins</h3> : null}
          
          
          
        </div>
        <div className={classes.background_layer}></div>
      </div>
    );
}

export default Accueil
