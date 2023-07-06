import './Loader.scss'
import icon from '../../assets/avvic_icon.png'

const Loader = () => {
  return (
    <div id='loader'>
        <img 
            src={icon} 
            alt={"avvic ico"} 
            title={'Avvic'} 
            className='animate__animated animate__pulse animate__infinite'
        />
    </div>
  )
}

export default Loader