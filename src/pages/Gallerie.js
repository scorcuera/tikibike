import classes from "./Gallerie.module.css";
import {stockImages} from '../images';



const Gallerie = () => {
    return (
      <div className={classes.big_container}>
        <div className={classes.container_1}>
          <div className={classes.section_title}>
            <h3>Galerie</h3>
          </div>
          <div className={classes.grid_container}>
            {stockImages.map((image) => (
              <div className={classes.grid_item}>
                <img style={{ width: "100%" }} src={image.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Gallerie
