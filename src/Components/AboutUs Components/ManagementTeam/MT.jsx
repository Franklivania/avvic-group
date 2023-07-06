import React, { useState, useEffect } from 'react';
import './MT.scss'
import Profile from '../../Profile/Profile';
import Modal from '../../Modal/Modal';

const MT = () => {
  const [activeProfile, setActiveProfile] = useState(null);
  const [mt, setMt] = useState([]);

  useEffect(() => {
    import('../../../Data/Profile.json')
      .then(data => {
        setMt(data.default.mt);
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
    <div id='mt'>
        <h2>MANAGEMENT TEAM</h2>
        <div className='mt-container'>
        {mt.map((profile, index) => (
          <Profile 
            key={index} 
            name={profile.name}
            image={profile.image}
            title={profile.title} 
            onClick={() => handleProfileClick(index)} 
            className={`mt-profile`}/>
        ))}
      </div>

      {activeProfile !== null && (
        <Modal 
          closeModal={handleCloseModal}
          title={mt[activeProfile].title }
          text={mt[activeProfile].content[0].about}
          image={mt[activeProfile].image} 
        />
      )}
    </div>
  )
}

export default MT