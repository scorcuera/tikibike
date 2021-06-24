import classes from "./Sorties.module.css"

const Sorties = () => {

    return (
      <div className={classes.big_container}>
        <div className={classes.container_1}>
          <div className={classes.section_title}>
            <h3>Nos sorties</h3>
          </div>
          <div className={classes.paragraph_container}>
            <div className={classes.paragraph}>
              <h6 className={classes.paragraph_title}>
                All mountain rando descendantes
              </h6>
              <p>VTT suspendu avant 35€</p>
              <p>VTT suspendu 45€</p>
              <p>Vélo enfant 32€</p>
            </div>
            <div className={classes.paragraph}>
              <h6 className={classes.paragraph_title}>Free Ride descente</h6>
              <p>VTT tout suspendu 70€</p>
            </div>
            <div className={classes.paragraph}>
              <h6 className={classes.paragraph_title}>
                Enduro sportif et technique
              </h6>
              <p>50€</p>
            </div>
            <div className={classes.paragraph}>
              <h6 className={classes.paragraph_title}>Pour les enfants</h6>
              <p>1/2 journée rando 28€</p>
              <p>1/2 journée descente 32€</p>
              <p>journée 55€ (9h 30-16h)</p>
            </div>
            <div className={classes.paragraph}>
              <h6 className={classes.paragraph_title}>Initation</h6>
              <p>De la dépose roulettes au perfectionnement (dès 4 ans)</p>
              <p>A partir de 25€</p>
            </div>
          </div>
        </div>

        <div className={classes.container_2}>
          <div className={classes.section_title}>
            <h3>Information générale</h3>
          </div>
          <div className={classes.paragraph_container}>
            <div className={classes.paragraph}>
              <h6 className={classes.paragraph_title}>Inclus dans le tarif:</h6>
              <p>• Encadrement brevet d'état</p>
              <p>• VTT adapté à la sortie</p>
              <p>• Casque gants genouillères coudières</p>
              <p>• Dorsale et forfait remontées mécaniques (Free Ride)</p>
              <p>• Navette jusqu'au début du parcours</p>
            </div>
            <div className={classes.paragraph}>
              <h6 className={classes.paragraph_title}>Réduction par élève :</h6>
              <p>• 3 sorties - 10%</p>
              <p>• 4 sorties -12%</p>
              <p>• 5 sorties -15 %</p>
              <p>• groupe de 6 personnes constitués -15 %</p>
            </div>
            <div className={classes.paragraph}>
              <p className={classes.paragraph_phrase}>
                N'hésitez pas à nous contacter pour des demandes particulières (initiation vélo de route vélo électrique...)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sorties
