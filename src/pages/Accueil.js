import classes from "./Accueil.module.css";
import backgroundImage from "../img/background-img.jpg";
import {IoIosArrowDown} from "react-icons/io";

const Accueil = () => {
    return (
      <div className={classes.big_container}>
        <div className={classes.main_text}>
          <h1 className={classes.brand_name}>Tikibike</h1>
          <p>l'école de vélo du pays des Écrins</p>
        </div>
        <img
          className={classes.background_img}
          src={backgroundImage}
          alt="Photo by Lachlan Cruickshank on Unsplash"
        />
        <div className={classes.footer_layer}>
            <a className={classes.button_footer} href="#">
                <IoIosArrowDown size={48} />
            </a>
        </div>
        <div className={classes.background_layer}></div>

      </div>
    );
}

export default Accueil
