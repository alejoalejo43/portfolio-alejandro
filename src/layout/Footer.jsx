import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div>
        <Link to={'/'}>Logo</Link>
      </div>
      <div>
        <h2>Mapa de sito</h2>
        <ul>
          <li>
            <Link to={'/about'}>About Me</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact Me</Link>
          </li>
          <li>
            <Link to={'/cv'}>Cv</Link>
          </li>
          <li>
            <Link to={'/links'}>Links</Link>
          </li>
          <li>
            <Link to={'/portfolio'}>Portfolio</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
