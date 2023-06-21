import './Videos.scss'
import videos from '../../../Data/Videos.json';

const VideosSection = () => {
  return (
    <section>
          {videos.map((item, index) => (
            <div className="vid-display" key={index}>
              <video src={item.video} controls></video>
              <h2>{item.title}</h2>
            </div>
          ))}
    </section>
  )
}

export default VideosSection