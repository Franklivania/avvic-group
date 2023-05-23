import React, { useState, useEffect } from 'react';
import './BOD.scss';
import Profile from '../../Profile/Profile';
import Modal from '../../Modal/Modal';

const BOD = () => {
  const [activeProfile, setActiveProfile] = useState(null);
  const [bod, setBod] = useState([]);

  useEffect(() => {
    import('../../../Data/Profile.json')
      .then(data => {
        setBod(data.default.bod);
      })
      .catch(error => {
        console.log('Error getting information', error);
      });
  }, []);

  function handleProfileClick(index) {
    setActiveProfile(index);
  }

  function handleCloseModal() {
    setActiveProfile(null);
  }

  return (
    <div id='bod'>
      <h2>BOARD OF DIRECTORS</h2>

      <div className='bod-container'>
        {bod.map((profile, index) => (
          <Profile 
            key={index} 
            name={profile.name}
            image={profile.image} 
            title={profile.title} 
            onClick={() => handleProfileClick(index)} />
        ))}
      </div>

      {activeProfile !== null && (
        <Modal 
          closeModal={handleCloseModal}
          title={bod[activeProfile].title }
          text={bod[activeProfile].content[0].about}
          image={bod[activeProfile].image} 
        />
      )}
    </div>
  );
};

export default BOD;
