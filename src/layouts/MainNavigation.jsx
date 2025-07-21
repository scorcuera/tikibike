import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { featuredImages } from '../assets/images';
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [showHamburgerItems, setShowHamburgerItems] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Si cambiamos a desktop, cerrar el menú
      if (window.innerWidth >= 768) {
        setShowHamburgerItems(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleHamburgerMenu = () => {
    // Solo permitir toggle en móviles
    if (isMobile) {
      setShowHamburgerItems(!showHamburgerItems);
    }
  };

  const closeMenu = () => {
    setShowHamburgerItems(false);
  };

  const navigationItems = [
    { path: "/sorties", label: "Sorties" },
    { path: "/stages", label: "Stages" },
    { path: "/location", label: "Location" },
    { path: "/galerie", label: "Galerie" },
    { path: "/contact", label: "Contact" },
    { path: "/", label: "Accueil" },
  ];

  return (
    <div style={{ position: "sticky", top: "0%", zIndex: "1" }}>
      <nav className={classes.nav}>
        <div>
          <Link to="/" onClick={closeMenu}>
            <img
              className={classes.logo_img}
              src={featuredImages.logo}
              alt="logo tikibike"
            />
          </Link>
        </div>

        <div
          onClick={handleHamburgerMenu}
          className={classes.hamburger}
          style={
            showHamburgerItems
              ? { color: "#F3E622", backgroundColor: "#043C53" }
              : null
          }
        >
          <GiHamburgerMenu
            className={classes.hamburger_icon}
            size={28}
          />
        </div>

        <ul className={classes.navbar_pc}>
          {navigationItems.map(({ path, label }) => (
            <li key={path}>
              <Link className={classes.navbar_pc_link} to={path}>
                <span className={classes.navbar_pc_item}>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {showHamburgerItems && isMobile && <MobileMenu items={navigationItems} onClose={closeMenu} />}
    </div>
  );
};

const MobileMenu = ({ items, onClose }) => {
  return (
    <div className={classes.navBar}>
      <ul className={classes.nav_items}>
        {items.map(({ path, label }) => (
          <li key={path}>
            <Link to={path} onClick={onClose}>
              <span className={classes.nav_item}>
                {label === "Galerie" ? "Galerie de photos" : label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainNavigation;
