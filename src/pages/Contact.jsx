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
    <div className={classes.page_container}>
      <div className={classes.page_title}>
        <h3>Contact</h3>
      </div>

      <div className={classes.map_section}>
        <iframe
          title="Mapa de ubicación de Tikibike en Vallouise"
          className={classes.map}
          src="https://maps.google.com/maps?q=tikibike%20vallouise&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          loading="lazy"
        />
      </div>

      <div className={classes.info_section}>
        <div className={classes.location_info}>
          <p className={classes.location_highlight}>
            À l'entrée de Vallouise en face de la pharmacie
          </p>
          <p className={classes.address}>Le Saint Genest 05290 Vallouise</p>
        </div>

        <div className={classes.contact_info}>
          <h4 className={classes.info_title}>Renseignements et réservations</h4>
          <div className={classes.contact_details}>
            <span className={classes.contact_text}>
              📧 tikibikevtt@gmail.com
            </span>
            <span className={classes.contact_text}>
              📱 06 10 69 01 28
            </span>
            <span className={classes.contact_text}>
              📱 06 71 69 53 45
            </span>
          </div>
        </div>

        <div className={classes.additional_info}>
          <p><strong>GPS:</strong> Latitude 44.840352 | Longitude 6.494649</p>
          <p><strong>Horaires d'accueil:</strong> 8h-9h • 10h-14h • 15h-19h</p>
        </div>
      </div>
    </div>
  );
};

const ContactDesktop = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page_container_desktop}>
      <div className={classes.page_title}>
        <h3>Contact</h3>
      </div>

      <div className={classes.content_wrapper_desktop}>
        <div className={classes.left_panel}>
          <div className={classes.map_section_desktop}>
            <iframe
              title="Mapa interactivo de ubicación de Tikibike en Vallouise"
              className={classes.map_desktop}
              src="https://maps.google.com/maps?q=tikibike%20vallouise&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              loading="lazy"
            />
          </div>
        </div>

        <div className={classes.right_panel}>
          <div className={classes.info_section_desktop}>
            <div className={classes.location_info}>
              <p className={classes.location_highlight}>
                À l'entrée de Vallouise en face de la pharmacie
              </p>
              <p className={classes.address}>Le Saint Genest 05290 Vallouise</p>
            </div>

            <div className={classes.contact_info}>
              <h4 className={classes.info_title}>Renseignements et réservations</h4>
              <div className={classes.contact_details}>
                <span className={classes.contact_text}>
                  📧 tikibikevtt@gmail.com
                </span>
                <span className={classes.contact_text}>
                  📱 06 10 69 01 28
                </span>
                <span className={classes.contact_text}>
                  📱 06 71 69 53 45
                </span>
              </div>
            </div>

            <div className={classes.additional_info}>
              <p><strong>GPS:</strong> Latitude 44.840352 | Longitude 6.494649</p>
              <p><strong>Horaires d'accueil:</strong> 8h-9h • 10h-14h • 15h-19h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
