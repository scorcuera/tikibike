import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layouts
import MainNavigation from './layouts/MainNavigation.jsx';

// Pages
import Accueil from './pages/Accueil.jsx';
import Sorties from './pages/Sorties.jsx';
import Stages from './pages/Stages.jsx';
import Location from './pages/Location.jsx';
import Contact from './pages/Contact.jsx';
import Gallerie from './pages/Gallerie.jsx';
import Prices from './pages/Prices.jsx';

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/sorties" element={<Sorties />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallerie" element={<Gallerie />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
    </Router>
  );
}

export default App;
