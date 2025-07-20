import { useState } from "react";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import ResponsiveLayout from '../components/ResponsiveLayout.jsx';
import classes from "./Sorties.module.css";

const Sorties = () => {
  return (
    <ResponsiveLayout 
      mobileComponent={SortiesMobile}
      desktopComponent={SortiesDesktop}
    />
  );
};

const SortiesMobile = () => {
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
            <p>VTT suspendu avant 38€</p>
            <p>VTT suspendu 50€</p>
            <p>Vélo enfant 35€</p>
          </div>
          <div className={classes.paragraph}>
            <h6 className={classes.paragraph_title}>
              Free Ride descente télésiège
            </h6>
            <p>VTT tout suspendu 80€</p>
          </div>
          <div className={classes.paragraph}>
            <h6 className={classes.paragraph_title}>
              Enduro sportif et technique
            </h6>
            <p>60€ (50€ avec vélo personnel)</p>
          </div>
          <div className={classes.paragraph}>
            <h6 className={classes.paragraph_title}>Pour les enfants</h6>
            <p>1/2 journée rando 30€</p>
            <p>1/2 journée descente 35€</p>
            <p>journée 62€ (9h30-16h)</p>
          </div>
          <div className={classes.paragraph}>
            <h6 className={classes.paragraph_title}>Initation</h6>
            <p>De la dépose roulettes au perfectionnement (dès 4 ans)</p>
            <p>28€ la demi-heure / 45€ l'heure</p>
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

const SortiesDesktop = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'allMountain',
      title: 'All mountain rando descendantes',
      content: ['VTT suspendu avant 38€', 'VTT suspendu 50€', 'Vélo enfant 35€'],
      className: 'sorties_info'
    },
    {
      id: 'freeRide',
      title: 'Free Ride descente',
      content: ['VTT tout suspendu 80€'],
      className: 'freeride_info'
    },
    {
      id: 'enduro',
      title: 'Enduro sportif et technique',
      content: ['60€ (50€ avec vélo personnel)'],
      className: 'enduro_info'
    },
    {
      id: 'enfants',
      title: 'Pour les enfants',
      content: ['1/2 journée rando 30€', '1/2 journée descente 35€', 'journée 62€ (9h30-16h)'],
      className: 'enfants_info'
    },
    {
      id: 'initiation',
      title: 'Initiation',
      content: ['De la dépose roulettes au perfectionnement (dès 4 ans)', '28€ la demi-heure / 45€ l\'heure'],
      className: 'initiation_info'
    }
  ];

  return (
    <div className={classes.big_container_big_device}>
      <div className={classes.section_container}>
        <div className={classes.section_1}>
          <div className={classes.section_title}>
            <h3>Sorties</h3>
          </div>
          <div className={classes.paragraph}>
            <p className={classes.paragraph_title}>
              Avec un moniteur à la demi journée
            </p>
          </div>
        </div>
        <div className={classes.section_2}>
          <div className={classes.section_2_container}>
            {sections.map((section) => (
              <div key={section.id} className={classes.section_2_item}>
                <p>{section.title}</p>
                <button
                  className={classes.section_2_btn}
                  onClick={() => toggleSection(section.id)}
                >
                  <BiPlus className={classes.section_2_btn_link} size={38} />
                </button>
                {activeSection === section.id && (
                  <div className={`${classes[section.className]} ${classes.info_container}`}>
                    {section.content.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
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
