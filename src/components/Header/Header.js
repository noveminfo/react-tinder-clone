import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import ModeCommentIcon from '@material-ui/icons/ModeComment'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link, useHistory } from 'react-router-dom'

import logo from '../../share/icon/fire.svg'
import './Header.css'

// eslint-disable-next-line react/prop-types
function Header ({ backButton }) {
  const history = useHistory()

  return (
    <div className='header'>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize='large' className='header__icon' />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className='header__icon' fontSize='large' />
        </IconButton>
      )}
      <Link to='/'>
        <img
          className='header__logo'
          src={logo}
          alt='logo'
        />
      </Link>
      <Link to='/chat'>
        <IconButton>
          <ModeCommentIcon className='header__icon' fontSize='large' />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
