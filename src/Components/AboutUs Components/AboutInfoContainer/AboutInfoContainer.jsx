import React from 'react';
import './AboutInfoContainer.scss';
import AboutMain from '../AboutMain/AboutMain';
import History from '../History/History';
import Culture from '../Culture/Culture';

const AboutInfoContainer = ({ activeSection }) => {
  return (
    <div id="aboutInfoContainer">
      {activeSection === null && <AboutMain />}
      {activeSection === 'history' && <History />}
      {activeSection === 'culture' && <Culture />}
    </div>
  );
};

export default AboutInfoContainer;
