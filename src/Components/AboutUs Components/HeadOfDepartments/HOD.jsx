import React, { useState, useEffect } from 'react';
import './HOD.scss'
import Profile from '../../Profile/Profile';
import Modal from '../../Modal/Modal';

const HOD = () => {
  const [activeProfile, setActiveProfile] = useState(null);
  const [hop, setHop] = useState([]);

  useEffect(() => {
    import('../../../Data/Profile.json')
      .then(data => {
        setHop(data.default.hop);
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
    <div id='hod'>
        <h2>HEAD OF PORTFOLIOS</h2>
        <div className='hop-container'>
        {hop.map((profile, index) => (
          <Profile 
            key={index} 
            abbr={profile.abbr}
            image={profile.image} 
            title={profile.title} 
            onClick={() => handleProfileClick(index)}
            className={`hop-profile`} />
        ))}
      </div>

      {activeProfile !== null && (
        <Modal 
          closeModal={handleCloseModal}
          name={hop[activeProfile].name}
          title={hop[activeProfile].title }
          text={hop[activeProfile].content[0].about}
          image={hop[activeProfile].image} 
        />
      )}
    </div>
  )
}

export default HOD