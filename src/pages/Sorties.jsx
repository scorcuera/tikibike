import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer.jsx';
import classes from './Sorties.module.css';

// --- Data Structure ---
const sortiesData = {
  main: {
    headers: ['suspendu avant', 'tout suspendu', 'enfants* suspendu avant', 'enfants* tout suspendu'],
    rows: [
      { name: 'All Mountain: Rando descendante', prices: [40, 55, 38, 45] },
      { name: 'Free Ride: Descente', prices: [null, 85, null, 80] },
      { name: 'Enduro: Sportif et technique', prices: [null, 65, null, null] },
      { name: 'Rando initiation: Fond de vallée', prices: [null, null, 32, null] },
    ]
  },
  reductions: 'Réductions: 3 sorties - 10%, 4 sorties - 12%, 5 sorties - 15% Groupe constitué de 6 personnes: - 15%',
  journeeEnfant: {
    title: 'Journée enfant (moins de 12 ans)',
    description: 'fond de vallée + descendante ( 9h 30 à 16h 30)',
    price: 70
  },
  cours: {
    headers: ['Cours particuliers', '1 personne', '2 personnes'],
    rows: [
      { name: '1/2 heure', prices: [30, 45] },
      { name: '1 heure', prices: [50, 65] },
      { name: '1 heure 1/2', prices: [70, 85] },
    ]
  },
  inclus: [
    'Encadrement moniteur Brevet d’état MCF',
    'VTT adapté à la sortie, navette jusqu’au départ du parcours',
    'Casque, coudières, genouillères, gants + Dorsale et forfait remontées mécaniques pour le free ride',
  ]
};

const Sorties = () => {
  return (
    <div className={classes.page_container}>
      <div className={classes.page_title}>
        <h3>Tarifs des sorties VTT</h3>
      </div>

      <div className={classes.content_wrapper}>
        {/* --- Main Table --- */}
        <div className={classes.table_responsive_wrapper}>
          <table className={`${classes.table} ${classes.main_table}`}>
            <thead>
              <tr>
                <th></th>
                {sortiesData.main.headers.map(header => <th key={header}>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {sortiesData.main.rows.map(row => (
                <tr key={row.name}>
                  <td data-label="Sortie">{row.name}</td>
                  {row.prices.map((price, index) => (
                    <td key={index} data-label={sortiesData.main.headers[index]}>
                      {price !== null ? <span className={classes.price_value}>{price} €</span> : '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Reductions & Journée Enfant --- */}
        <div className={classes.info_section}>
          <p className={classes.reductions_text}>{sortiesData.reductions}</p>
        </div>
        <div className={`${classes.info_section} ${classes.journee_enfant}`}>
          <div>
            <strong>{sortiesData.journeeEnfant.title}</strong>
            <small>{sortiesData.journeeEnfant.description}</small>
          </div>
          <span className={classes.price_tag}>{sortiesData.journeeEnfant.price} €</span>
        </div>

        {/* --- Cours Particuliers Table --- */}
        <div className={classes.table_responsive_wrapper}>
          <table className={`${classes.table} ${classes.cours_table}`}>
            <thead>
              <tr>
                {sortiesData.cours.headers.map(header => <th key={header}>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {sortiesData.cours.rows.map(row => (
                <tr key={row.name}>
                  <td data-label={sortiesData.cours.headers[0]}>{row.name}</td>
                  {row.prices.map((price, index) => (
                    <td key={index} data-label={sortiesData.cours.headers[index + 1]}>
                      {price !== null ? <span className={classes.price_value}>{price} €</span> : '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Prix Button --- */}
        <div className={classes.prix_button_container}>
          <Link to="/prix" className={classes.prix_button}>
            Nos prix
          </Link>
        </div>

        {/* --- Inclus Section --- */}
        <div className={classes.inclus_section}>
          <h3 className={classes.section_title}>Inclus dans toutes nos sorties:</h3>
          <ul>
            {sortiesData.inclus.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sorties;
