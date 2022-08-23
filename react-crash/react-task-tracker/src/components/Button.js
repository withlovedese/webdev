import propTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button 
        className="btn" 
        style={{backgroundColor: color}}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func,
    
}

export default Button

