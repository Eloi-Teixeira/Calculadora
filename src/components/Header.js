import React from 'react';
import Logo from '../assets/logo/logo.png';
import { ReactComponent as MoonSVG } from '../assets/icons/moon.svg';
import { ReactComponent as SunSVG } from '../assets/icons/sun.svg';
import { ReactComponent as HomeSVG } from '../assets/icons/home.svg';
import { ReactComponent as ContactSVG } from '../assets/icons/contact.svg';
import { ReactComponent as CalculatorSVG } from '../assets/icons/calculator.svg';
import { ReactComponent as PiSvg } from '../assets/icons/pi.svg';
import { ReactComponent as RootSvg } from '../assets/icons/root.svg';
import { ReactComponent as PercentSvg } from '../assets/icons/percent.svg';
import { ReactComponent as WeightSvg } from '../assets/icons/weight.svg';
import { ReactComponent as TriangleSvg } from '../assets/icons/triangle.svg';
import { ReactComponent as AngleSvg } from '../assets/icons/angle.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleActiveMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeChange = () => {
    if (
      window.localStorage.getItem('theme') === null ||
      window.localStorage.getItem('theme') === 'light'
    ) {
      window.localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-mode');
      setIsDarkMode(true);
    } else {
      window.localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-mode');
      setIsDarkMode(false);
    }
  };

  React.useEffect(() => {
    const autoThemeChange = () => {
      if (window.localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        setIsDarkMode(true);
      } else {
        window.localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
        setIsDarkMode(false);
      }
    };

    autoThemeChange();
  }, []);

  return (
    <header>
      <div>
        <Link to="/" className="logo-container">
          <div className="logo-content">
            <img
              src={Logo}
              alt="Logo da Calculadora Completa"
              width="54px"
              height="51px"
            />
          </div>
        </Link>
      </div>
      <div className="header-content">
        <nav className="nav-pages">
          <ul>
            <li className="nav-pages-item">
              <NavLink to="/">Home</NavLink>
              <span className="link-ornament"></span>
            </li>
            <li className="nav-pages-item">
              <NavLink to="calc">Calculadora</NavLink>
              <span className="link-ornament"></span>
            </li>
            <li className="nav-pages-item">
              <NavLink to="/contact">Contato</NavLink>
              <span className="link-ornament"></span>
            </li>
          </ul>
        </nav>
        <div>
          <button
            className="btn-theme"
            aria-label="Alternar entre tema claro e escuro"
            onClick={handleThemeChange}
          >
            <MoonSVG className="sun" />
            <SunSVG className="moon" />
          </button>
        </div>
      </div>
      <div className="header-mobile">
        <button
          className={`btn-menu-mobile ${isMenuOpen ? 'active' : ''}`}
          onClick={handleActiveMobileMenu}
          aria-label={
            isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
          }
          aria-expanded={isMenuOpen}
        >
          <span className="bar-menu-mobile"></span>
          <span className="bar-menu-mobile"></span>
          <span className="bar-menu-mobile"></span>
        </button>
        <nav className="nav-mobile" aria-label="Menu de navegação móvel">
          <ul>
            <li className="menu-mobile-item">
              <NavLink to="/" onClick={handleActiveMobileMenu}>
                <HomeSVG />
                Home
              </NavLink>
            </li>
            <li className="menu-mobile-item">
              <NavLink to="/calc" onClick={handleActiveMobileMenu}>
                <CalculatorSVG />
                Calculadora
              </NavLink>
            </li>
            <li className="menu-mobile-item">
              <NavLink to="/contact" onClick={handleActiveMobileMenu}>
                <ContactSVG />
                Contato
              </NavLink>
            </li>
            <li className="menu-mobile-item">
              <NavLink to="/calc/algebra" onClick={handleActiveMobileMenu}>
                <PiSvg />
                Álgebra
              </NavLink>
            </li>
            <li className="menu-mobile-item">
              <NavLink to="/calc/percent" onClick={handleActiveMobileMenu}>
                <PercentSvg />
                Porcentagem
              </NavLink>
            </li>
            <li className="menu-mobile-item">
              <NavLink to="/calc/rooting" onClick={handleActiveMobileMenu}>
                <RootSvg />
                Radiciação
              </NavLink>
            </li>
            <li className="menu-mobile-item">
              <NavLink to="/calc/geometry" onClick={handleActiveMobileMenu}>
                <TriangleSvg />
                Geométria
              </NavLink>
            </li>
            <li className="menu-mobile-item">
              <NavLink to="/calc/angle" onClick={handleActiveMobileMenu}>
                <AngleSvg />
                Angulo
              </NavLink>
            </li>
            <li className="menu-mobile-item">
              <NavLink to="/calc/strength" onClick={handleActiveMobileMenu}>
                <WeightSvg />
                Força
              </NavLink>
            </li>
            <li className="menu-mobile-item">
              <button
                className="btn-theme-mobile"
                onClick={handleThemeChange}
                aria-label="Alternar entre tema claro e escuro"
              >
                <span>
                  <SunSVG className="sun" /> <MoonSVG className="moon" />
                </span>
                {isDarkMode ? 'Modo Escuro' : 'Modo Claro'}
              </button>
            </li>
            <li className="btn-mobile-close" onClick={handleActiveMobileMenu}>
              Fechar
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
