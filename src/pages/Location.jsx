import { useEffect } from 'react';
import { Link } from "react-router-dom";
import ResponsiveLayout from '@/components/ResponsiveLayout.jsx';
import LazyImage from '@/components/LazyImage.jsx';
import { featuredImages } from '@/assets/images';
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
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page_container}>
      <div className={classes.page_title}>
        <h3>Location VTT</h3>
      </div>

      <div className={classes.content_wrapper}>
        {/* --- Main Content Section --- */}
        <div className={classes.main_section}>
          <div className={classes.description_card}>
            <p className={classes.description_text}>
              Nous avons régulièrement des vélos d'occasion, renseignez vous.
            </p>
          </div>

          {/* --- Bike Types Section --- */}
          <div className={classes.bikes_section}>
            <h4 className={classes.section_title}>Location à l'heure, à la journée et à la semaine</h4>
            <div className={classes.bikes_grid}>
              <div className={classes.bike_item}>
                <div className={classes.bike_icon}>🚴</div>
                <h5>Vélo de route</h5>
              </div>
              <div className={classes.bike_item}>
                <div className={classes.bike_icon}>🏔️</div>
                <h5>VTT tout suspendu</h5>
              </div>
              <div className={classes.bike_item}>
                <div className={classes.bike_icon}>🌲</div>
                <h5>VTT suspendu avant</h5>
              </div>
              <div className={classes.bike_item}>
                <div className={classes.bike_icon}>⚡</div>
                <h5>VTT électrique</h5>
              </div>
              <div className={classes.bike_item}>
                <div className={classes.bike_icon}>👶</div>
                <h5>VTT enfants</h5>
              </div>
              <div className={classes.bike_item}>
                <div className={classes.bike_icon}>🚴‍♀️</div>
                <h5>VTT tandem</h5>
              </div>
            </div>
          </div>

          {/* --- Equipment Section --- */}
          <div className={classes.equipment_section}>
            <h4 className={classes.section_title}>Équipements inclus</h4>
            <div className={classes.equipment_list}>
              <div className={classes.equipment_item}>
                <span className={classes.equipment_icon}>🛡️</span>
                <span>Protection</span>
              </div>
              <div className={classes.equipment_item}>
                <span className={classes.equipment_icon}>👶</span>
                <span>Siège bébé</span>
              </div>
              <div className={classes.equipment_item}>
                <span className={classes.equipment_icon}>🪖</span>
                <span>Casque</span>
              </div>
              <div className={classes.equipment_item}>
                <span className={classes.equipment_icon}>🧤</span>
                <span>Gants</span>
              </div>
              <div className={classes.equipment_item}>
                <span className={classes.equipment_icon}>🔧</span>
                <span>Kit de réparation</span>
              </div>
            </div>
          </div>

          {/* --- CTA Button --- */}
          <div className={classes.cta_section}>
            <Link to="/galerie" className={classes.cta_button}>
              Voir des photos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationDesktop = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page_container_desktop}>
      <div className={classes.page_title}>
        <h3>Location VTT</h3>
      </div>

      <div className={classes.content_wrapper_desktop}>
        <div className={classes.left_panel}>
          <div className={classes.content_section}>
            <div className={classes.description_card}>
              <p className={classes.description_text}>
                Nous avons régulièrement des vélos d'occasion, renseignez vous.
              </p>
            </div>

            {/* --- Bike Types Section --- */}
            <div className={classes.bikes_section}>
              <h4 className={classes.section_title}>Location à l'heure, à la journée et à la semaine</h4>
              <div className={classes.bikes_grid}>
                <div className={classes.bike_item}>
                  <div className={classes.bike_icon}>🚴</div>
                  <h5>Vélo de route</h5>
                </div>
                <div className={classes.bike_item}>
                  <div className={classes.bike_icon}>🏔️</div>
                  <h5>VTT tout suspendu</h5>
                </div>
                <div className={classes.bike_item}>
                  <div className={classes.bike_icon}>🌲</div>
                  <h5>VTT suspendu avant</h5>
                </div>
                <div className={classes.bike_item}>
                  <div className={classes.bike_icon}>⚡</div>
                  <h5>VTT électrique</h5>
                </div>
                <div className={classes.bike_item}>
                  <div className={classes.bike_icon}>👶</div>
                  <h5>VTT enfants</h5>
                </div>
                <div className={classes.bike_item}>
                  <div className={classes.bike_icon}>🚴‍♀️</div>
                  <h5>VTT tandem</h5>
                </div>
              </div>
            </div>

            {/* --- Equipment Section --- */}
            <div className={classes.equipment_section}>
              <h4 className={classes.section_title}>Équipements inclus</h4>
              <div className={classes.equipment_list}>
                <div className={classes.equipment_item}>
                  <span className={classes.equipment_icon}>🛡️</span>
                  <span>Protection</span>
                </div>
                <div className={classes.equipment_item}>
                  <span className={classes.equipment_icon}>👶</span>
                  <span>Siège bébé</span>
                </div>
                <div className={classes.equipment_item}>
                  <span className={classes.equipment_icon}>🪖</span>
                  <span>Casque</span>
                </div>
                <div className={classes.equipment_item}>
                  <span className={classes.equipment_icon}>🧤</span>
                  <span>Gants</span>
                </div>
                <div className={classes.equipment_item}>
                  <span className={classes.equipment_icon}>🔧</span>
                  <span>Kit de réparation</span>
                </div>
              </div>
            </div>

            {/* --- CTA Button --- */}
            <div className={classes.cta_section}>
              <Link to="/galerie" className={classes.cta_button}>
                Voir des photos
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.right_panel}>
          <LazyImage
            src={featuredImages.location}
            alt="Location VTT Tikibike"
            priority={true}
            className={classes.location_image}
            aspectRatio="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
