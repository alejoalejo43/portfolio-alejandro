import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Header.css';

const links = [
  {
    name: 'ABOUT ME',
    to: '/about',
    key: 'link-about',
  },
  {
    name: 'CONTACT ME',
    to: '/contact',
    key: 'link-contact',
  },
  {
    name: 'CV',
    to: '/cv',
    key: 'link-cv',
  },
  {
    name: 'LINKS',
    to: '/links',
    key: 'link-links',
  },
  {
    name: 'PORTFOLIO',
    to: '/portfolio',
    key: 'link-portfolio',
  },
];
const Header = () => {
  const location = useLocation();
  return (
    <header>
      <div>
        {/* <img src="../assets/firmaRS2.svg" alt="" /> */}
        <Link to={'/'}>Logo</Link>
      </div>
      {/* <span>Location:{location.pathname}</span> */}
      <nav>
        <ul className="header_ul">
          {links.map((link) => {
            return (
              <li key={link.key}>
                <Link
                  className={
                    location.pathname === `${link.to}`
                      ? 'link-header active'
                      : 'link-header'
                  }
                  to={link.to}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
