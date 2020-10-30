import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setinput] = useState('')
  const [messages, setMessages] = useState([])
  const sendMessage = (event) => {
    event.preventDefault()
    setMessages([...messages, input])
    setinput('')
  }
  console.log(input)
  console.log(messages)
  return (
    <div className="App">
      <h1>The is faceBook clone</h1>
      <input
        value={input}
        onChange={event => setinput(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
      {messages}
      {/* input */}
      {/* Button */}

    </div>
  );
}

export default App;
