import React from 'react';
import Logo from '../assets/logo/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as GithubSvg } from '../assets/icons/github.svg';
import { ReactComponent as LinkedinSvg } from '../assets/icons/linkedin.svg';

const Footer = () => {
  return (
    <footer className={`footer-container `}>
      <Link to="/" className="logo-content">
        <img
          src={Logo}
          alt="Logo da Calculadora Completa"
          width="54px"
          height="51px"
        />
      </Link>
      <div className="footer-text">
        <Link to="privacity-policy">Política de Privacidade</Link>
        <p>
          Precisa de ajuda? <Link to="contact">Entre em contato.</Link>
        </p>
        <p>© 2025 Calculadora Completa. Todos os direitos reservados.</p>
      </div>
      <div className="social-media">
        <a href="https://github.com/Eloi-Teixeira/Calculadora" target="_blanck">
          <GithubSvg />
          <p>GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/el%C3%B3i-teixeira-8a613930a/"
          target="_blanck"
        >
          <LinkedinSvg />
          <p>Linkedin</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
