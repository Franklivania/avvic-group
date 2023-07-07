import React, { useState } from 'react';
import './Media.scss';
import hero from '../../assets/media.png';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import News from '../../Components/MediaComponents/News/News';
import Photos from '../../Components/MediaComponents/Photos/Photos';
import Videos from '../../Components/MediaComponents/Videos/Videos';
import VideosSection from '../../Components/MediaComponents/Videos/VideosSection';
import PhotosSection from '../../Components/MediaComponents/Photos/PhotosSection.jsx';
import ToggleButton from '../../Components/ToggleButton/ToggleButton';


const Media = () => {
  const [showContent, setShowContent] = useState(null);

  return (
    <div id='media'>
      <Navbar />

      <div id="media-hero">
        <img src={hero} alt="" />
        <h1>Media</h1>
      </div>

      {!showContent ? (
        <div id="media-content">
          <News />
          <Photos showPhotos={setShowContent} />
          <Videos showComponent={setShowContent} />
        </div>
      ) : (
        <Displayed activeLink={showContent} setActiveLink={setShowContent} />
      )}

      <Footer />
    </div>
  );
};

export default Media;

function Displayed({ activeLink, setActiveLink }) {
    
    const handleGoBack = () => {
        setActiveLink(null);
    };

    const getComponent = (linked) => {
        switch (linked) {

        case 1:
            return <PhotosSection/>

        case 2:
            return <VideosSection />

        default:
            return null;
        }
    }

  return (
    <div id="media-display">
        <ToggleButton onClick={handleGoBack} title={'Go Back'} className={'bk-btn'} />
        {getComponent(activeLink)}
    </div>
  );
}
