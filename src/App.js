import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import TinderCards from './components/TinderCards/TinderCards'
import Chats from './components/Chats/Chats'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SwipeButtons from './components/SwipeButtons/SwipeButtons'
import ChatScreen from './components/Chats/ChatScreen'

function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>

      {/* Tinder Cards */}
      {/* Buttons below tinder cards */}

      {/* Chats screen */}
      {/* Individual chat screen */}

    </div>
  )
}

export default App
