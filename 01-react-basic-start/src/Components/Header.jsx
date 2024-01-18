import logo from '/logo-name.svg'
import { useState } from 'react'
export default function Header(){
  const [now , setNow ] = useState(new Date())
  setInterval(() => setNow(new Date()), 1000)
  
    const time = new Date()
    return(
  
      <header>
 
        <img src={logo} alt="" />
        <span>Time now: {time.toLocaleTimeString()}</span>
      </header>
    )
  }
  