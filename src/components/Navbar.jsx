import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-1 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[8vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="sm:w-[60px] sm:h-[60px] w-[55px] h-[55px] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-6 mt-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[16px] font-medium font-mova 
                uppercase tracking-[1px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {toggle && (
            <div
              className={`fixed top-0 left-0 w-full h-full bg-flashWhite z-20 flex flex-col justify-center items-center`}>
              <div className="absolute top-5 right-5">
                <img
                  src={close}
                  alt="close"
                  className="w-[20px] h-[20px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul className="list-none flex flex-col gap-8 items-center justify-center">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[20px] font-medium font-mova 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
