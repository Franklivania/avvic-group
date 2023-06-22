import './Photos.scss'
import photomain from '../../../assets/photosmain.jpg'

const Photos = ({ showPhotos }) => {

    const handleClick = () => {
        if (showPhotos) {
          showPhotos(1);
        }
    };

  return (
    <div id='photos'>
        <main onClick={handleClick}>
            <img src={photomain} alt="" />

            <div className="text">
                <h1>
                    <i className='fa-solid fa-photo-film fa-3x'></i> <br />
                    Photos
                </h1>
            </div>
        </main>

        
    </div>
  )
}

export default Photos