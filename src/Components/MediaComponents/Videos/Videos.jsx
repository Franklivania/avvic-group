import './Videos.scss';
import videomain from '../../../assets/videomain.jpg';

const Videos = ({ showComponent }) => {
    
  const handleClick = () => {
    if (showComponent) {
      showComponent(2);
    }
  };

  return (
    <div id="videos">
      <main onClick={handleClick}>
        <img src={videomain} alt="" />
        <div className="text">
          <h1>
            <i className="fa-brands fa-youtube fa-3x"></i> <br />
            Videos
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Videos;
