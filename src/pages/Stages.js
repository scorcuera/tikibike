import classes from "./Stages.module.css";

const Stages = () => {
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
          </div>
        </div>
      </div>
    );
}

export default Stages
