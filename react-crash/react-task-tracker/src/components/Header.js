import propTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, showForm, showAdd }) => {

  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={showForm}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

// CSS in JSX
// const HeadingStyle = {
//     color : 'red',
//     backgroundColor : 'black' 
// }

export default Header