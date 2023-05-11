import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import the styles and components you're going to use
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"

function App() {
  // Messages State will go here

  return (
    <div className='App'>
      <div /* styles will go here */ >
        {/* MainContainer will start here */}
          {/* ChatContainer will start here */}
            {/* MessageList will start here */}
              {/* message array will be mapped here */}
            {/* MessageList will stop here */}
          {/* Chat Container will stop here */}
        {/* MainContainer will stop here */}
      </div>
    </div>
  )
}

export default App
