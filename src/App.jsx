import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  const handleClick = () => {

    setEnabled((prevEnabled) => !prevEnabled)
  }

  useEffect(()=>{
    const handleMove = (event) =>{
      const { clientX, clientY } = event;

      setPosition({ x: clientX, y: clientY })
    }
    if(enabled){
      window.addEventListener('mousemove', handleMove)
    }
    return () => {
      window.removeEventListener('mousemove', handleMove)
    }

  },[enabled] )

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
     <button onClick={handleClick} >{enabled ? 'Dejar se seguir el puntero':'Seguir Puntero'}</button>
    </>
  )
}

export default App
