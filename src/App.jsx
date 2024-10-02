import { useState } from 'react'
import './App.css'
import Notes from './Notes'   
function App() {
  return (
    <div className='app'>
     <h1 style={{height:"70px"}}>Note App </h1>
     
     <Notes />
     <button  className='note_save btn'onClick={()=>{
        localStorage.clear()
        window.location.reload()
      }}>Delete all</button>
    </div>
  )
}

export default App
