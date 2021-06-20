import classes from "./Location.module.css"
import { Link } from "react-router-dom";

const Location = () => {
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
              <p>
                Equipements: protection, siége bébé… Les prix comprennent
                casque, gants et Kit de réparation.
              </p>
            </div>
            <Link to="/gallerie" className={classes.button_location}>
              <a className={classes.button_link}>Voir des photos</a>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Location
