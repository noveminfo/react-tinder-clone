import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats () {
  return (
    <div className='chats'>
      <Chat
        name='Mark'
        message='hello!'
        timestamp='1 minute ago'
        // profilePic='...'
      />
      <Chat
        name='Kerry'
        message='Go to Hellllll'
        timestamp='3 minute ago'
        // profilePic='...'
      />
      <Chat
        name='Adm'
        message='welcome!!!'
        timestamp='7 minute ago'
        // profilePic='...'
      />
      <Chat
        name='Gouue'
        message='Jueessssss'
        timestamp='1 hour ago'
        // profilePic='...'
      />
    </div>
  )
}

export default Chats
