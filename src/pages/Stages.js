
import ResponsiveLayout from '../components/ResponsiveLayout';
import { featuredImages } from '../assets/images';
import classes from "./Stages.module.css";

const Stages = () => {
  return (
    <ResponsiveLayout 
      mobileComponent={StagesMobile}
      desktopComponent={StagesDesktop}
    />
  );
};

const StagesMobile = () => {
  return (
    <div className={classes.big_container}>
      <div className={classes.container_1}>
        <div className={classes.section_title}>
          <h3>Stages</h3>
        </div>
        <div className={classes.paragraph_container}>
          <div className={classes.paragraph}>
            <p className={classes.paragraph_phrase}>
              Nous vous proposons des stages sur trois, quatre et cinq
              demi-journées par semaine avec une progression all mountain,
              freeride et enduro.
            </p>
          </div>
          <div className={classes.paragraph}>
            <h6 className={classes.paragraph_title}>Réduction par élève :</h6>
            <p>• 3 sorties - 10%</p>
            <p>• 4 sorties -12%</p>
            <p>• 5 sorties -15 %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StagesDesktop = () => {
  return (
    <div className={classes.big_container_big_device}>
      <div className={classes.section_container}>
        <div className={classes.section_1}>
          <div className={classes.section_title}>
            <h3>Stages</h3>
          </div>
          <div className={classes.paragraph_container}>
            <div className={classes.paragraph}>
              <p className={classes.paragraph_phrase}>
                Nous vous proposons des stages sur trois, quatre et cinq
                demi-journées par semaine avec une progression all mountain,
                freeride et enduro.
              </p>
            </div>
            <div className={classes.paragraph}>
              <h6 className={classes.paragraph_title}>Réduction par élève :</h6>
              <p>• 3 sorties - 10%</p>
              <p>• 4 sorties -12%</p>
              <p>• 5 sorties -15 %</p>
            </div>
          </div>
        </div>
        <div className={classes.section_2}>
          <img 
            className={classes.img_section} 
            src={featuredImages.stages} 
            alt="Stages VTT Tikibike"
            loading="lazy"
          />
        </div>
      </div>
      <div className={classes.footer}></div>
    </div>
  );
};

export default Stages;
