import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/firmaRS2.svg';

const links = [
  {
    name: 'ABOUT ME',
    to: '/about',
    key: 'link-about',
    background: '/src/assets/hero.jpg',
  },
  {
    name: 'CONTACT ME',
    to: '/contact',
    key: 'link-contact',
    background: '/src/assets/hero.jpg',
  },
  {
    name: 'CV',
    to: '/cv',
    key: 'link-cv',
    background: '/src/assets/hero.jpg',
  },
  {
    name: 'LINKS',
    to: '/links',
    key: 'link-links',
    background: '/src/assets/hero.jpg',
  },
  {
    name: 'PORTFOLIO',
    to: '/portfolio',
    key: 'link-portfolio',
    background: '/src/assets/hero_portfolio.jpg',
  },
];
const Header = () => {
  const location = useLocation();
  const [background, setBackground] = useState('/src/assets/hero.jpg');
  useEffect(() => {
    const { pathname } = location;
    const link = links.find((link) => link.to === pathname);
    if (link) {
      setBackground(link.background);
    }
  }, [location]);

  return (
    <header
      className="hero"
      style={{
        backgroundImage: `
        linear-gradient(
          to right,
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.6)
        ),
        url(${background})`,
      }}
    >
      <figure className="logo">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
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
