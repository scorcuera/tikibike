import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { featuredImages } from './assets/images';
import useImagePrefetch from './hooks/useImagePrefetch.js';
import './App.css';

// Layouts
import MainNavigation from './layouts/MainNavigation.jsx';

// Pages
import Accueil from './pages/Accueil.jsx';
import Sorties from './pages/Sorties.jsx';
import Stages from './pages/Stages.jsx';
import Location from './pages/Location.jsx';
import Contact from './pages/Contact.jsx';
import Galerie from './pages/Galerie.jsx';
import Prices from './pages/Prices.jsx';

function App() {
  // Prefetch critical images across the app
  useImagePrefetch([
    featuredImages.background,
    featuredImages.backgroundMedium,
    featuredImages.logo,
    featuredImages.stages,
    featuredImages.location
  ], {
    priority: 3,
    delay: 500, // Wait longer as user is still on landing page
    connection: 'auto'
  });

  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/sorties" element={<Sorties />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
    </Router>
  );
}

export default App;
