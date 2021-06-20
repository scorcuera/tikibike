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
        <div style={{position: "sticky", top:"0%", zIndex: "1"}}>
        <nav className={classes.nav}>
            <div>
                <Link to="/" onClick={redirectHome}>
                <img className={classes.logo_img} src={logo} alt="logo tikibike" />
                </Link>
                
            </div>
            <div>
               <h3 className={classes.nav_title}></h3>
            </div>
            <div className={classes.hamburger} style={showHamburgerItems? clickedHamburgerColor : null}>
                <GiHamburgerMenu size={28} onClick={handleHamburgerMenu} />
            </div>
        </nav>
        <div>
            {showHamburgerItems? <NavItems onClick={handleHamburgerMenu} /> : null}
        </div>
        </div>
    )
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
                    <li className={classes.nav_item}>Gallerie de photos</li>
                </Link>
                
            </ul>
        </div>
    )
}

export default MainNavigation
