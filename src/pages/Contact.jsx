import { useEffect } from 'react';
import ResponsiveLayout from '@/components/ResponsiveLayout.jsx';
import { featuredImages } from '@/assets/images';
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <ResponsiveLayout 
      mobileComponent={ContactMobile}
      desktopComponent={ContactDesktop}
    />
  );
};

const ContactMobile = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.big_container}>
      <div className={classes.container_1}>
        <div className={classes.section_title}>
          <h3>Contact</h3>
        </div>
        <div className={classes.container_map}>
          <iframe
            title="Mapa de ubicación de Tikibike en Vallouise"
            className={classes.map}
            src="https://maps.google.com/maps?q=tikibike%20vallouise&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
        </div>
        <div className={classes.paragraph_container}>
          <p className={classes.paragraph_phrase}>
            À l'entrée de Vallouise en face de la pharmacie
          </p>
          <p>Le Saint Genest 05290 Vallouise</p>
          <h6 className={classes.paragraph_title}>
            Renseignements et réservations :
          </h6>
          <p>tikibikevtt@gmail.com</p>
          <p>06 10 69 01 28 / 06 71 69 53 45</p>
          <p>GPS : latitude 44,840352. Longitude : 6,494649</p>
          <p>Horaires d'accueil 8h à 9h– 10 h à 14h – 15 h à 19h</p>
        </div>
        <div>
          <div className={classes.container_logo}>
            <img className={classes.logo_img} src={featuredImages.logo} alt="logo tikibike" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactDesktop = () => {
  return (
    <div className={classes.big_container_big_device}>
      <div className={classes.section_container}>
        <div className={classes.section_1}>
          <div className={classes.section_title}>
            <h3>Contact</h3>
          </div>
          <div className={classes.container_map}>
            <iframe
              title="Mapa interactivo de ubicación de Tikibike en Vallouise"
              className={classes.map}
              src="https://maps.google.com/maps?q=tikibike%20vallouise&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </div>
        <div className={classes.section_2}>
          <div className={classes.paragraph_container}>
            <p className={classes.paragraph_phrase}>
              À l'entrée de Vallouise en face de la pharmacie
            </p>
            <p>Le Saint Genest 05290 Vallouise</p>
            <h6 className={classes.paragraph_title}>
              Renseignements et réservations :
            </h6>
            <p>tikibikevtt@gmail.com</p>
            <p>06 10 69 01 28 / 06 71 69 53 45</p>
            <p>GPS : latitude 44,840352. Longitude : 6,494649</p>
            <p>Horaires d'accueil 8h à 9h– 10 h à 14h – 15 h à 19h</p>
          </div>
          <div>
            <div className={classes.container_logo}>
              <img className={classes.logo_img} src={featuredImages.logo} alt="logo tikibike" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer}></div>
    </div>
  );
};

export default Contact;
