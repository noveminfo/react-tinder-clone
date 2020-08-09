import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StartRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButtons.css';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className='swipeButtons__replay'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__close'>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__start'>
        <StartRateIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__favor'>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__flash'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  )
}

export default SwipeButtons;