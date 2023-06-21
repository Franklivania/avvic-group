import './Button.scss'
import { useNavigate } from 'react-router-dom'
const Button = ({link, title, className, children, onMouseEnter, onMouseLeave}) => {
    const navigate = useNavigate()

    function handleClick(){
      navigate(link)
    }

  return (
    <button type='button' id='gen-btn' onClick={handleClick} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {title}
        {children}
    </button>
  )
}

export default Button