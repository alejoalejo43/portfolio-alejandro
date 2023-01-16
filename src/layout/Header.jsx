import React from 'react';
import { Link, useLocation } from 'react-router-dom';


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

      <figure className="logo">
        <Link to={'/'}>
          <img src="../assets/firmaRS2.svg" alt="logo" />
        </Link>
      </figure>

  
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
