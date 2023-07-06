import React from 'react';
import './Profile.scss';
import 'animate.css';

const Profile = ({ image, children, title, className, name, onClick, key, abbr }) => {
  return (
    <div id='profile' className={className} onClick={onClick} key={key}>
      <img src={image} alt={name} title={name} />
      {children}
      <div className="pop">
        <h6>{name}</h6>
        <h6>{abbr}</h6>
        <small>{title}</small>
      </div>
    </div>
  );
};

export default Profile;
