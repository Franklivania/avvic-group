import './AvvicConsultsOffers.scss';
import content from '../../../Data/AvvicConsults.json';
import { Fade } from 'react-awesome-reveal';

const AvvicConsultsOffers = () => {    

  return (
    <div id='ac-offers'>
        <h1>MARKET SIZE AND OPPORTUNITIES</h1>

            <Fade damping={200} delay={200}>
                <div id='ac-market-content'>
                    {content.market.map((contents, idx) => (
                        <div id='market-content' key={idx}>
                        <img src={contents.image} alt={contents.title} />
                        <span>
                            <h3>{contents.title}</h3>
                            <p>{contents.text}</p>
                        </span>
                        </div>
                    ))}
                </div>
            </Fade>

        <h1>BUSINESS MODELS</h1>

        <div id='ac-business-content'>
            {content.business.map((contents, idx) => (
                <div id='business-content' key={idx}>
                <i className={contents.icon}></i>

                <span>
                    <h3>{contents.title}</h3>
                    <p>{contents.text}</p>
                </span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default AvvicConsultsOffers;
