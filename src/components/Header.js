import React from 'react';
import Logo from '../assets/imgs/logo/logo.png';
import { ReactComponent as MoonSVG } from '../assets/imgs/icons/moon.svg';
import { ReactComponent as SunSVG } from '../assets/imgs/icons/sun.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const handleThemeChange = () => {
    if (
      window.localStorage.getItem('theme') === null ||
      window.localStorage.getItem('theme') === 'light'
    ) {
      window.localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      window.localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  };

  React.useEffect(() => {
    const autoThemeChange = () => {
      if (window.localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        window.localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
      }
    };

    autoThemeChange();
  }, []);

  return (
    <header>
      <div>
        <NavLink to="/" className="logo-container">
          <div className="logo-content">
            <img src={Logo} alt="Logo" width='54px' height='51px' />
          </div>
        </NavLink>
      </div>
      <div className="header-content">
        <nav className="nav-pages">
          <ul>
            <li className="nav-pages-item">
              <NavLink to="/">Home</NavLink>
              <span className='link-ornament'></span>
            </li>
            <li className="nav-pages-item">
              <NavLink to="contact">Contato</NavLink>
              <span className='link-ornament'></span>
            </li>
            <li className="nav-pages-item">
              <NavLink to="calc">Calculadora</NavLink>
              <span className='link-ornament'></span>
            </li>
          </ul>
        </nav>
        <div>
          <button className="btn-theme" aria-label='Troca de tema' onClick={handleThemeChange}>
            <MoonSVG className="sun" />
            <SunSVG className="moon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
