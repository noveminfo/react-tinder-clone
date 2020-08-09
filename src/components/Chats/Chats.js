import React from 'react';
import './Chats.css';

function Chats() {
  return (
    <div className='chats'>
      <Chat
        name='Mark'
        message='hello!'
        timestamp='1 minute ago'
        profilePic='...'
      />
    </div>
  )
}

export default Chats;