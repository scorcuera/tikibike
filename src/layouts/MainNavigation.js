import classes from "./MainNavigation.module.css";
import { useState } from "react";
import logo from "../img/logo.jpg";
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-router-dom";

const MainNavigation = (props) => {
    
    const clickedHamburgerColor = {color: "#F3E622", backgroundColor: "#043C53"}

  
    const [showHamburgerItems, setHamburgerItems] = useState(false)
   

    const handleHamburgerMenu = () => setHamburgerItems(!showHamburgerItems) 
    const redirectHome = () => setHamburgerItems(false);
    
 

    return (
      <div style={{ position: "sticky", top: "0%", zIndex: "1" }}>
        <nav className={classes.nav}>
          <div>
            <Link to="/" onClick={redirectHome}>
              <img
                className={classes.logo_img}
                src={logo}
                alt="logo tikibike"
              />
            </Link>
          </div>
          <div>
            <h3 className={classes.nav_title}></h3>
          </div>
          <div
            onClick={handleHamburgerMenu}
            className={classes.hamburger}
            style={showHamburgerItems ? clickedHamburgerColor : null}
          >
            <GiHamburgerMenu
              className={classes.hamburger_icon}
              size={28}
              onClick={handleHamburgerMenu}
            />
            
          </div>
          <ul className={classes.navbar_pc}>
              <Link className={classes.navbar_pc_link} to="/sorties">
                <li className={classes.navbar_pc_item}>Sorties</li>
              </Link>
              <Link to="/stages">
                <li className={classes.navbar_pc_item}>Stages</li>
              </Link>
              <Link to="/location">
                <li className={classes.navbar_pc_item}>Location</li>
              </Link>
              <Link to="/gallerie">
                <li className={classes.navbar_pc_item}>Galerie</li>
              </Link>
              <Link to="/contact">
                <li className={classes.navbar_pc_item}>Contact</li>
              </Link>
              <Link to="/">
                <li className={classes.navbar_pc_item}>Accueil</li>
              </Link>
            </ul>
        </nav>

        {showHamburgerItems ? <NavItems onClick={handleHamburgerMenu} /> : null}
      </div>
    );
}

const NavItems = (props) => {
    return(
        <div className={classes.navBar}>
            <ul className={classes.nav_items} >
                <Link to="/sorties" onClick={props.onClick}>
                    <li className={classes.nav_item}>Sorties</li>
                </Link>
                <Link to="/stages" onClick={props.onClick}>
                     <li className={classes.nav_item}>Stages</li>
                </Link>
                <Link to="/location" onClick={props.onClick}>
                     <li className={classes.nav_item}>Location</li>
                </Link>
                <Link to="/contact" onClick={props.onClick}>
                    <li className={classes.nav_item}>Contact</li>
                </Link>
                <Link to="/gallerie" onClick={props.onClick}>
                    <li className={classes.nav_item}>Galerie de photos</li>
                </Link>
                
            </ul>
        </div>
    )
}

export default MainNavigation
