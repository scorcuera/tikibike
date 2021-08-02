import classes from "./Sorties.module.css";

import { useMediaQuery } from "react-responsive";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sorties = () => {
  
  const isSmallDevice = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isMediumDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  return <div>{isSmallDevice ? <SmallDevice /> : <LargeDevice />}</div>;
};

const SmallDevice = () => {
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
            <h6 className={classes.paragraph_title}>
              Free Ride descente télésiège
            </h6>
            <p>VTT tout suspendu 75€</p>
          </div>
          <div className={classes.paragraph}>
            <h6 className={classes.paragraph_title}>
              Enduro sportif et technique
            </h6>
            <p>55€</p>
          </div>
          <div className={classes.paragraph}>
            <h6 className={classes.paragraph_title}>Pour les enfants</h6>
            <p>1/2 journée rando 28€</p>
            <p>1/2 journée descente 32€</p>
            <p>journée 60€ (9h 30-16h)</p>
          </div>
          <div className={classes.paragraph}>
            <h6 className={classes.paragraph_title}>Initation</h6>
            <p>De la dépose roulettes au perfectionnement (dès 4 ans)</p>
            <p>25€ la demi-heure / 40€ l'heure</p>
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
              N'hésitez pas à nous contacter pour des demandes particulières
              (initiation vélo de route vélo électrique...)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LargeDevice = () => {
 


  const [AllMountainInfo, setAllMountainInfo] = useState(false);
  const [FreeRideInfo, setFreeRideInfo] = useState(false);
  const [EnduroInfo, setEnduroInfo] = useState(false);
  const [EnfantsInfo, setEnfantsInfo] = useState(false);
  const [InitiationInfo, setInitiationInfo] = useState(false);

  const handleAllMountainInfo = () => setAllMountainInfo(!AllMountainInfo);
  const handleFreeRideInfo = () => setFreeRideInfo(!FreeRideInfo);
  const handleEnduroInfo = () => setEnduroInfo(!EnduroInfo);
  const handleEnfantsInfo = () => setEnfantsInfo(!EnfantsInfo);
  const handleInitiationInfo = () => setInitiationInfo(!InitiationInfo);

  return (
    <div className={classes.big_container_big_device}>
      <div className={classes.section_container}>
        <div className={classes.section_1}>
          <div className={classes.section_title}>
            <h3>Sorties</h3>
          </div>
          <div className={classes.paragraph}>
            <p className={classes.paragraph_title}>
              Avec un moniteur a la demi journeé
            </p>
          </div>
        </div>
        <div className={classes.section_2}>
          <div className={classes.section_2_container}>
            
              <div className={classes.section_2_item}>
                <p>All mountain rando descendantes</p>
                <a
                  className={classes.section_2_btn}
                  onClick={handleAllMountainInfo}
                >
                  <BiPlus className={classes.section_2_btn_link} size={38} />
                </a>
                {AllMountainInfo ? (
                <div className={`${classes.sorties_info} ${classes.info_container}`}>
                  <p>VTT suspendu avant 35€</p>
                  <p>VTT suspendu 45€</p>
                  <p>Vélo enfant 32€</p>
                </div>
              ) : null}
              </div>

              <div className={classes.section_2_item}>
              <p>Free Ride descente</p>
              <a  onClick={handleFreeRideInfo} className={classes.section_2_btn}>
                <BiPlus className={classes.section_2_btn_link} size={38} />
              </a>
              {FreeRideInfo ? (
                <div className={`${classes.freeride_info} ${classes.info_container}`}>
                  <p>VTT tout suspendu 75€</p>
                </div>
              ) : null}
              </div>
              
              <div className={classes.section_2_item}>
              <p>Enduro sportif et technique</p>
              <a onClick={handleEnduroInfo} className={classes.section_2_btn}>
                <BiPlus className={classes.section_2_btn_link} size={38} />
              </a>
              {EnduroInfo ? (
                <div className={`${classes.enduro_info} ${classes.info_container}`}>
                  <p>55€</p>
                </div>
              ) : null}
              </div>
     
              <div className={classes.section_2_item}>
              <p>Pour les enfants</p>
              <a onClick={handleEnfantsInfo} className={classes.section_2_btn}>
                <BiPlus className={classes.section_2_btn_link} size={38} />
              </a>
              {EnfantsInfo ? (
                <div className={`${classes.enfants_info} ${classes.info_container}`}>
                  <p>1/2 journée rando 28€</p>
                  <p>1/2 journée descente 32€</p>
                  <p>journée 60€ (9h 30-16h)</p>
                </div>
              ) : null}
              </div>
              

              <div className={classes.section_2_item}>
              <p>Initiation</p>
              <a onClick={handleInitiationInfo} className={classes.section_2_btn}>
                <BiPlus className={classes.section_2_btn_link} size={38} />
              </a>
              {InitiationInfo ? (
                <div className={`${classes.initiation_info} ${classes.info_container}`}>
                  <p>De la dépose roulettes au perfectionnement (dès 4 ans)</p>
                  <p>25€ la demi-heure / 40€ l'heure</p>
                  
                </div>
              ) : null}
              </div>
              
              
            <Link className={classes.btnLink} to="/prices">  
               <button className={classes.section_2_btn_prix}>Nos prix</button>
            </Link>
            
          </div>
        </div>
      </div>
      
      <div className={classes.footer}></div>
    </div>
  );
};
export default Sorties;
