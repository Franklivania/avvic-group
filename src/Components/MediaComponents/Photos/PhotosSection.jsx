import { useState } from "react";
import "./Photos.scss";
import content from "../../../Data/Photos.json";
import one from "../../../assets/1.jpg";
import two from "../../../assets/2.jpg";
import three from "../../../assets/3.jpg";
import PhotoControlsModal from "./PhotoControlsModal/PhotoControlsModal";

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

      {displayModal === 1 && (
        <PhotoControlsModal
          closeModal={handleModalDisplay}
          images={content.heritage}
          left={left}
          right={() => right(content.heritage.length)}
          currentSlide={currentSlide}
          totalSlides={content.heritage.length}
          className={displayModal === 1 ? "modal-display" : ""}
        />
      )}

      {displayModal === 2 && (
        <PhotoControlsModal
          closeModal={handleModalDisplay}
          images={content.inauguration}
          left={left}
          right={() => right(content.inauguration.length)}
          currentSlide={currentSlide}
          totalSlides={content.inauguration.length}
          className={displayModal === 2 ? "modal-display" : ""}
        />
      )}

      {displayModal === 3 && (
        <PhotoControlsModal
          closeModal={handleModalDisplay}
          images={content.csr}
          left={left}
          right={() => right(content.csr.length)}
          currentSlide={currentSlide}
          totalSlides={content.csr.length}
          className={displayModal === 3 ? "modal-display" : ""}
        />
      )}
    </section>
  );
};

export default PhotosSection;
