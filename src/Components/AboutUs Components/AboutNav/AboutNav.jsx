import React, { useState } from 'react';
import './AboutNav.scss';
import 'animate.css';
import { Link } from 'react-router-dom';

const AboutNav = ({ className, activeSection, setActiveSection }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [open, setOpen] = useState(false);

  function handleClick(link, section) {
    if (activeLink === link) {
      setActiveLink(null);
      setActiveSection(null);
    } else {
      setActiveLink(link);
      setActiveSection(section);
    }
  }

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div id="aboutNav" className={className}>
      <button type="button" id="open" onClick={handleOpen}>
        <i className={`fa-solid fa-${!open ? 'times' : 'bars'} fa-2x`}></i>
      </button>
      {!open && (
        <div className="list animate__animated">
          <NavLink
            link={''}
            title={'ABOUT US'}
            active={activeLink === null}
            onClick={() => handleClick(null, null)}
          />
          <NavLink
            link={''}
            title={'LEADERSHIP'}
            active={activeLink === 'leadership'}
            onClick={() => handleClick('leadership', 'leadership')}
          />
          <NavLink
            link={''}
            title={'HISTORY'}
            active={activeLink === 'history'}
            onClick={() => handleClick('history', 'history')}
          />
          <NavLink
            link={''}
            title={'CULTURE'}
            active={activeLink === 'culture'}
            onClick={() => handleClick('culture', 'culture')}
          />
        </div>
      )}
    </div>
  );
};

function NavLink({ link, title, active, onClick, children }) {
  return (
    <Link to={link} onClick={onClick} className={`link ${active ? 'active' : ''}`}>
      {title}
      {children}
    </Link>
  );
}

export default AboutNav;
