import "./PhotoControlsModal.scss";
import ToggleButton from "../../../ToggleButton/ToggleButton";

const PhotoControlsModal = ({
  images,
  className,
  title,
  left,
  right,
  closeModal,
  currentSlide,
  totalSlides,
}) => {
    
  return (
    <div id="ph-ct-modal" className={className}>
      <div id="ph-modal-content">
        <img src={images[`${currentSlide}`].image} alt={title} />

        <ToggleButton
          onClick={closeModal}
          className={`gallery-btns photo-close`}
        >
          <i className="fa-solid fa-x fa-2x"></i>
        </ToggleButton>

        <div id="gallery-controls">
          <ToggleButton
            className={"gallery-btns gallery-ctrl-btns gallery-left"}
            disabled={currentSlide === 0}
            onClick={left}
          >
            <i className="fa-solid fa-chevron-left fa-3x"></i>
          </ToggleButton>

          <ToggleButton
            className={"gallery-btns gallery-ctrl-btns gallery-right"}
            disabled={currentSlide === totalSlides - 1}
            onClick={right}
          >
            <i className="fa-solid fa-chevron-right fa-3x"></i>
          </ToggleButton>
        </div>
      </div>

      <div className="gallery-slide-counter">
        {`${currentSlide + 1} / ${totalSlides}`}
      </div>
    </div>
  );
};

export default PhotoControlsModal;