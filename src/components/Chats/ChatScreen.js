import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css'

function ChatScreen () {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: '',
      message: 'Whats up?'
    },
    {
      name: 'katey',
      image: '',
      message: 'Hows is going!'
    },
    {
      message: 'Hi, How are you'
    }
  ])

  const handleSend = e => {
    e.preventDefault()
    setMessages([...messages, { message: input }])
    setInput('')
  }

  return (
    <div className="chatScreen">
      <p className='chatScreen__timestamp'>YOU MATCHED WITH ELLEN ON 10/08/20</p>
      {messages.map((message, index) => (
        message.name ? (
          <div key={index} className="chatScreen__message">
            <Avatar
              className='chatScreen__image'
              alt={message.name}
              src={message.image}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div key={index} className="chatScreen__message">
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      ))}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          className="chatScreen__inputButton"
          type="submit"
          onClick={handleSend}
        >
          SEND
        </button>
      </form>
    </div>
  )
}

export default ChatScreen
