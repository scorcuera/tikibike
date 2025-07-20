import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layouts
import MainNavigation from './layouts/MainNavigation';

// Pages
import Accueil from './pages/Accueil';
import Sorties from './pages/Sorties';
import Stages from './pages/Stages';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Gallerie from './pages/Gallerie';
import Prices from './pages/Prices';

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
