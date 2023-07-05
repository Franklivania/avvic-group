import React from 'react';
import './Profile.scss';
import 'animate.css';

const Profile = ({ image, children, title, className, name, onClick, key }) => {
  return (
    <div id='profile' className={className} onClick={onClick} key={key}>
      <img src={image} alt={name} title={name} />
      {children}
      <div className="pop animate__animated">
        <h5>{name}</h5>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Profile;
