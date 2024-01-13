import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()  

  return (
    <header className='header'>
      <h1>{title}  Task tracker </h1>
      {
        location.pathname === '/' && (
          <Button text = {showAdd ? 'Close' : 'Add'} 
              color ={showAdd?'red':'green'} 
              onClick = {onAdd}/>
        )
      }
    </header>
  )
}

Header.defaultProps = {
    title: 'Welcome to '
}

Header.defaultProps ={
    title: PropTypes.string.isRequired,
}

export default Header
