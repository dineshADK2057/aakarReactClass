
import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("");


  return (
    <>
      <div >
        <label htmlFor="message">Enter your message</label>
        <br />
        <textarea name="message" id="message" placeholder='Enter your message' rows="10" cols="80"

          onChange={(e)=>{
            setMessage(e.target.value);
          }}

        ></textarea>
          

      </div>
      <h1>Your message is: </h1>
      <p>{message}</p>

      <h5>character count: {message.length}</h5>
      <h5>word count: {message.split(" ").length}</h5>

      <br />
      <button onClick={()=>{
        setMessage(message.toUpperCase());
      }}>Upper Case</button>
    </>
  )
}

export default App
