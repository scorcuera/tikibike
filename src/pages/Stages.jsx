
import { useEffect } from 'react';
import ResponsiveLayout from '@/components/ResponsiveLayout.jsx';
import LazyImage from '@/components/LazyImage.jsx';
import { featuredImages } from '@/assets/images';
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
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page_container}>
      <div className={classes.page_title}>
        <h3>Stages VTT</h3>
      </div>

      <div className={classes.content_wrapper}>
        {/* --- Main Content Section --- */}
        <div className={classes.main_section}>
          <div className={classes.description_card}>
            <p className={classes.description_text}>
              Nous vous proposons des stages sur trois, quatre et cinq
              demi-journées par semaine avec une progression all mountain,
              freeride et enduro.
            </p>
          </div>

          {/* --- Reductions Section --- */}
          <div className={classes.reductions_section}>
            <h4 className={classes.section_title}>Réduction par élève</h4>
            <div className={classes.reductions_grid}>
              <div className={classes.reduction_item}>
                <span className={classes.reduction_number}>3</span>
                <span className={classes.reduction_text}>sorties</span>
                <span className={classes.reduction_percent}>-10%</span>
              </div>
              <div className={classes.reduction_item}>
                <span className={classes.reduction_number}>4</span>
                <span className={classes.reduction_text}>sorties</span>
                <span className={classes.reduction_percent}>-12%</span>
              </div>
              <div className={classes.reduction_item}>
                <span className={classes.reduction_number}>5</span>
                <span className={classes.reduction_text}>sorties</span>
                <span className={classes.reduction_percent}>-15%</span>
              </div>
            </div>
          </div>

          {/* --- Features Section --- */}
          <div className={classes.features_section}>
            <h4 className={classes.section_title}>Progression proposée</h4>
            <div className={classes.features_grid}>
              <div className={classes.feature_item}>
                <div className={classes.feature_icon}>🏔️</div>
                <h5>All Mountain</h5>
                <p>Technique de base et progression en terrain varié</p>
              </div>
              <div className={classes.feature_item}>
                <div className={classes.feature_icon}>🚵</div>
                <h5>Freeride</h5>
                <p>Descente et sauts pour les plus expérimentés</p>
              </div>
              <div className={classes.feature_item}>
                <div className={classes.feature_icon}>⚡</div>
                <h5>Enduro</h5>
                <p>Sportif et technique pour tous niveaux</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StagesDesktop = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.page_container_desktop}>
      <div className={classes.page_title}>
        <h3>Stages VTT</h3>
      </div>

      <div className={classes.content_wrapper_desktop}>
        <div className={classes.left_panel}>
          <div className={classes.content_section}>
            <div className={classes.description_card}>
              <p className={classes.description_text}>
                Nous vous proposons des stages sur trois, quatre et cinq
                demi-journées par semaine avec une progression all mountain,
                freeride et enduro.
              </p>
            </div>

            {/* --- Reductions Section --- */}
            <div className={classes.reductions_section}>
              <h4 className={classes.section_title}>Réduction par élève</h4>
              <div className={classes.reductions_grid}>
                <div className={classes.reduction_item}>
                  <span className={classes.reduction_number}>3</span>
                  <span className={classes.reduction_text}>sorties</span>
                  <span className={classes.reduction_percent}>-10%</span>
                </div>
                <div className={classes.reduction_item}>
                  <span className={classes.reduction_number}>4</span>
                  <span className={classes.reduction_text}>sorties</span>
                  <span className={classes.reduction_percent}>-12%</span>
                </div>
                <div className={classes.reduction_item}>
                  <span className={classes.reduction_number}>5</span>
                  <span className={classes.reduction_text}>sorties</span>
                  <span className={classes.reduction_percent}>-15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.right_panel}>
          <LazyImage
            src={featuredImages.stages}
            alt="Stages VTT Tikibike"
            priority={true}
            className={classes.stages_image}
            aspectRatio="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Stages;
