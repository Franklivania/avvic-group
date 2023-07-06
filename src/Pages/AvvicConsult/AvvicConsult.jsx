import './AvvicConsult.scss'
import hero from '../../assets/consultimg.png'
import up from '../../assets/up.png'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import AvvicConsultHero from '../../Components/AvvicConsultsComponents/AvvicConsultHero/AvvicConsultHero'
import SectionButton from '../../Components/SectionButton/SectionButton'
import AvvicConsultsOffers from '../../Components/AvvicConsultsComponents/AvvicConsultsOffers/AvvicConsultsOffers'


const AvvicConsult = () => {
  return (
    <div id='consult'>
        <Navbar />

          <div id="consult-hero">
            <img src={hero} alt="" />
            <h1>AVVIC Consult</h1>
          </div>

          <AvvicConsultHero />

          <AvvicConsultsOffers />

        <Footer />

        <SectionButton to={'consult-hero'} className={'consult-btn'} image={up}/>
    </div>
  )
}

export default AvvicConsult