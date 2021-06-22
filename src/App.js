import  { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {AnimatePresence, motion} from "framer-motion";
import './App.css';
import Sorties from './pages/Sorties';
import Stages from './pages/Stages';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Gallerie from './pages/Gallerie';
import MainNavigation from './layouts/MainNavigation';
import Accueil from './pages/Accueil';



function App() {
 
  

  return (
    <Router >
      <MainNavigation />
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/sorties" component={Sorties} title="Nos sorties" />
        <Route path="/stages" component={Stages} title="Stages" />
        <Route path="/location" component={Location} title="Location" />
        <Route path="/contact" component={Contact} title="Contact" />
        <Route path="/gallerie" component={Gallerie} title="Gallerie" />
      </Switch>
    </Router>
  );
}

export default App;
