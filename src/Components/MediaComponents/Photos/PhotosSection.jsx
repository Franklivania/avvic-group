import React, { useState } from 'react'
import './Photos.scss'
import content from '../../../Data/Photos.json'
import one from '../../../assets/1.jpg'
import two from '../../../assets/2.jpg'
import three from '../../../assets/3.jpg'
import PhotoControlsModal from './PhotoControlsModal/PhotoControlsModal'

const PhotosSection = () => {
  const [displayModal, setDisplayModal] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleModalDisplay(index) {
    setDisplayModal(displayModal === index ? null : index);
    setCurrentSlide(0);
  }

  function left() {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  }

  function right(maxSlide) {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, maxSlide - 1));
  }

  return (
    <section>
      <div className="imgdisplay" onClick={() => handleModalDisplay(1)}>
        <img src={one} alt="" />
        <h2>Heritage Images</h2>
      </div>

      <div className="imgdisplay" onClick={() => handleModalDisplay(2)}>
        <img src={two} alt="" />
        <h2>Avvic Inauguration Images</h2>
      </div>

      <div className="imgdisplay" onClick={() => handleModalDisplay(3)}>
        <img src={three} alt="" />
        <h3>CSR-IMT Got Talent</h3>
      </div>

      {displayModal === 1 && content.heritage.map((items, idx) => (
        <PhotoControlsModal
          key={idx}
          closeModal={handleModalDisplay}
          image={items.image[currentSlide]}
          left={left}
          right={() => right(items.image.length)}
          currentSlide={currentSlide}
          totalSlides={items.image.length}
          className={displayModal === 1 ? 'modal-display' : ''}
        />
      ))}

      {displayModal === 2 && content.inauguration.map((items, idx) => (
        <PhotoControlsModal
          key={idx}
          closeModal={handleModalDisplay}
          image={items.image[currentSlide]}
          left={left}
          right={() => right(items.image.length)}
          currentSlide={currentSlide}
          totalSlides={items.image.length}
          className={displayModal === 2 ? 'modal-display' : ''}
        />
      ))}

      {displayModal === 3 && content.csr.map((items, idx) => (
        <PhotoControlsModal
          key={idx}
          closeModal={handleModalDisplay}
          image={items.image[currentSlide]}
          left={left}
          right={() => right(items.image.length)}
          currentSlide={currentSlide}
          totalSlides={items.image.length}
          className={displayModal === 3 ? 'modal-display' : ''}
        />
      ))}
    </section>
  );
}

export default PhotosSection;
