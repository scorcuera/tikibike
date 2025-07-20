import { Link } from "react-router-dom";
import ResponsiveLayout from '../components/ResponsiveLayout';
import { featuredImages } from '../assets/images';
import classes from "./Location.module.css";

const Location = () => {
  return (
    <ResponsiveLayout 
      mobileComponent={LocationMobile}
      desktopComponent={LocationDesktop}
    />
  );
};

const LocationMobile = () => {
  return (
    <div className={classes.big_container}>
      <div className={classes.container_1}>
        <div className={classes.section_title}>
          <h3>Location</h3>
        </div>
        <div className={classes.paragraph_container}>
          <div className={classes.paragraph}>
            <p className={classes.paragraph_phrase}>
              Nous avons régulièrement des vélos d'occasion, renseignez vous.
            </p>
          </div>
          <div className={classes.paragraph}>
            <h6 className={classes.paragraph_title}>
              Location à l'heure à la journée et à la semaine :
            </h6>
            <p>Vélo de route</p>
            <p>VTT tout suspendu</p>
            <p>VTT suspendu avant</p>
            <p>VTT eléctrique</p>
            <p>VTT enfants</p>
            <p>VTT tandem</p>
            <p style={{ paddingTop: "1rem" }}>
              Equipements: protection, siége bébé… Les prix comprennent casque,
              gants et Kit de réparation.
            </p>
          </div>
          <Link to="/gallerie" className={classes.button_location}>
            Voir des photos
          </Link>
        </div>
      </div>
    </div>
  );
};

const LocationDesktop = () => {
  return (
    <div className={classes.big_container_big_device}>
      <div className={classes.section_container}>
        <div className={classes.section_1}>
          <div className={classes.section_title}>
            <h3>Location</h3>
          </div>
          <div className={classes.paragraph_container}>
            <div className={classes.paragraph}>
              <p className={classes.paragraph_phrase}>
                Nous avons régulièrement des vélos d'occasion, renseignez vous.
              </p>
            </div>
            <div className={classes.paragraph}>
              <h6 className={classes.paragraph_title}>
                Location à l'heure à la journée et à la semaine :
              </h6>
              <p>Vélo de route</p>
              <p>VTT tout suspendu</p>
              <p>VTT suspendu avant</p>
              <p>VTT eléctrique</p>
              <p>VTT enfants</p>
              <p>VTT tandem</p>
              <p style={{ paddingTop: "1rem" }}>
                Equipements: protection, siége bébé… Les prix comprennent
                casque, gants et Kit de réparation.
              </p>
            </div>
            <Link to="/gallerie" className={classes.button_location}>
              Voir des photos
            </Link>
          </div>
        </div>
        <div className={classes.section_2}>
          <img 
            className={classes.img_section} 
            src={featuredImages.location} 
            alt="Location VTT Tikibike"
            loading="lazy"
          />
        </div>
      </div>
      <div className={classes.footer}></div>
    </div>
  );
};

export default Location;
