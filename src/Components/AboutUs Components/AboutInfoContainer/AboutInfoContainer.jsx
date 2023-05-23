import React from 'react';
import './AboutInfoContainer.scss';
import AboutMain from '../AboutMain/AboutMain';
import History from '../History/History';
import Culture from '../Culture/Culture';
import Leadership from '../Leadership/Leadership';

const AboutInfoContainer = ({ activeSection, activeSubLink }) => {
  return (
    <div id="aboutInfoContainer">
      {activeSection === null && <AboutMain />}
      {activeSection === 'history' && <History />}
      {activeSection === 'culture' && <Culture />}
      {activeSection === 'leadership' && (
        <Leadership activeSubLink={activeSubLink} />
      )}
    </div>
  );
};

export default AboutInfoContainer;
