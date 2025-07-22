import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { IoChevronDown } from 'react-icons/io5';
import ResponsiveLayout from '@/components/ResponsiveLayout.jsx';
import LazyImage from '@/components/LazyImage.jsx';
import { featuredImages } from '@/assets/images';
import classes from "./Location.module.css";
import pricesClasses from "./Prices.module.css";

// --- Price Data Structure ---
const priceData = {
  categories: [
    { id: 'vtt_suspendu', name: 'VTT suspendu av.' },
    { id: 'pouces_26_24', name: '26/24 pouces Enfants' },
    { id: 'pouces_20_16', name: '20/16 pouces Enfants' },
    { id: 'draisien', name: 'Draisien. 12 pouces' },
    { id: 'vtt_tout_suspendu', name: 'VTT Tout suspendu' },
    { id: 'electrique_suspendu', name: 'ELECTRIQUE suspendu av.' },
    { id: 'electrique_tout_suspendu', name: 'ELECTRIQUE tout suspendu' },
    { id: 'route', name: 'ROUTE' },
  ],
  durations: [
    { id: '1h', name: '1h' },
    { id: '2h', name: '2h' },
    { id: '3h', name: '3h' },
    { id: '4h', name: '4h' },
    { id: '5h', name: '5h' },
    { id: '1j', name: '1 j.' },
    { id: '2j', name: '2 j.' },
    { id: '3j', name: '3 j.' },
    { id: '4j', name: '4 j.' },
    { id: '5j', name: '5 j.' },
    { id: 'plus_1j', name: '+ 1 j.' },
  ],
  prices: {
    vtt_suspendu: [10, 15, 18, 20, 24, 28, 50, 70, 88, 110, 24],
    pouces_26_24: [8, 12, 14, 16, 20, 24, 40, 60, 70, 85, 18],
    pouces_20_16: [6, 9, 11, 14, 16, 18, 28, 40, 50, 65, 15],
    draisien: [4, 6, 7, 8, 9, 12, 19, 27, 34, 42, 8],
    vtt_tout_suspendu: [null, 28, 32, 35, 42, 48, 88, 130, 170, 200, 40],
    electrique_suspendu: [null, 30, 34, 38, 45, 55, 95, 140, 190, 235, 50],
    electrique_tout_suspendu: [null, 40, 45, 50, 65, 80, 145, 220, 290, 350, 70],
    route: [null, 20, 25, 30, 35, 40, 70, 100, 125, 150, 30],
  },
  extras: [
    { name: 'Casque intégral', price: '4 € / jour' },
    { name: 'Genouillères + coudières', price: '5 € / jour' },
    { name: 'Dorsale', price: '4 € / jour' },
    { name: 'Kit de protection: dorsale, casque intégral, gants, genouillères, coudières', price: '10 € / jour' },
    { name: 'Porte bébé', price: '4 € / jour' },
    { name: 'Girafe', price: '10 € / jour' },
    { name: 'Shotgun', price: '5 € / jour' },
  ],
  notes: [
    'Les prix comprennent: vélo, casque , kit de réparation.',
    'Les vélos récupérés le soir sont en location à la journée minimum.',
  ]
};

const Location = () => {
  return (
    <ResponsiveLayout 
      mobileComponent={LocationMobile}
      desktopComponent={LocationDesktop}
    />
  );
};

const LocationMobile = () => {
  const [openCategory, setOpenCategory] = useState(priceData.categories[0].id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

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

      {/* --- Prices Section --- */}
      <div style={{ backgroundColor: '#f8f9fa', paddingTop: '2rem' }}>
        <div className={pricesClasses.page_title}>
          <h3>Tarifs de location 2025</h3>
        </div>

        {/* --- Mobile Accordion --- */}
        <div className={pricesClasses.mobile_accordion_container}>
          {priceData.categories.map(cat => (
            <div key={cat.id} className={pricesClasses.accordion_item}>
              <button onClick={() => toggleCategory(cat.id)} className={pricesClasses.accordion_header}>
                <span>{cat.name}</span>
                <IoChevronDown className={`${pricesClasses.accordion_icon} ${openCategory === cat.id ? pricesClasses.open : ''}`} />
              </button>
              {openCategory === cat.id && (
                <div className={pricesClasses.accordion_content}>
                  <ul>
                    {priceData.durations.map((dur, durIndex) => (
                      priceData.prices[cat.id][durIndex] !== null && (
                        <li key={`${cat.id}-${dur.id}`}>
                          <span>{dur.name}</span>
                          <span>{priceData.prices[cat.id][durIndex]} €</span>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* --- Extras and Notes --- */}
        <div className={pricesClasses.extras_container}>
          <div className={pricesClasses.extras_section}>
            <h3 className={pricesClasses.section_title}>Équipement supplémentaire</h3>
            <ul>
              {priceData.extras.map(extra => (
                <li key={extra.name}>
                  <span>{extra.name}</span>
                  <span>{extra.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={pricesClasses.notes_section}>
              {priceData.notes.map((note, index) => <p key={index}>{note}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationDesktop = () => {
  const [openCategory, setOpenCategory] = useState(priceData.categories[0].id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

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

      {/* --- Prices Section --- */}
      <div style={{ backgroundColor: '#f8f9fa', paddingTop: '2rem' }}>
        <div className={pricesClasses.page_title}>
          <h3>Tarifs de location 2025</h3>
        </div>

        {/* --- Desktop Table --- */}
        <div className={pricesClasses.desktop_table_container}>
          <table className={pricesClasses.price_table}>
            <thead>
              <tr>
                <th>Durée</th>
                {priceData.categories.map(cat => <th key={cat.id}>{cat.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {priceData.durations.map((dur, durIndex) => (
                <tr key={dur.id}>
                  <td>{dur.name}</td>
                  {priceData.categories.map(cat => (
                    <td key={`${cat.id}-${dur.id}`}>
                      {priceData.prices[cat.id][durIndex] !== null ? `${priceData.prices[cat.id][durIndex]} €` : '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Mobile Accordion --- */}
        <div className={pricesClasses.mobile_accordion_container}>
          {priceData.categories.map(cat => (
            <div key={cat.id} className={pricesClasses.accordion_item}>
              <button onClick={() => toggleCategory(cat.id)} className={pricesClasses.accordion_header}>
                <span>{cat.name}</span>
                <IoChevronDown className={`${pricesClasses.accordion_icon} ${openCategory === cat.id ? pricesClasses.open : ''}`} />
              </button>
              {openCategory === cat.id && (
                <div className={pricesClasses.accordion_content}>
                  <ul>
                    {priceData.durations.map((dur, durIndex) => (
                      priceData.prices[cat.id][durIndex] !== null && (
                        <li key={`${cat.id}-${dur.id}`}>
                          <span>{dur.name}</span>
                          <span>{priceData.prices[cat.id][durIndex]} €</span>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* --- Extras and Notes --- */}
        <div className={pricesClasses.extras_container}>
          <div className={pricesClasses.extras_section}>
            <h3 className={pricesClasses.section_title}>Équipement supplémentaire</h3>
            <ul>
              {priceData.extras.map(extra => (
                <li key={extra.name}>
                  <span>{extra.name}</span>
                  <span>{extra.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={pricesClasses.notes_section}>
              {priceData.notes.map((note, index) => <p key={index}>{note}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
