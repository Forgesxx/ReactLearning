import Header from './Components/Header'
import {ways, differences } from './data'
import WaysToTeach from './Components/WaysToTeach'
import Button from './Components/Button/Button'
import { useState } from 'react'
 

export default function App() {
    const [contentType , setContentType ] = useState()
    
 
 
     function handleClick(type){
      console.log('Clicked', type)
      setContentType(type)

  }     
  return (
    <div>
      <Header />
      <main>      
      <section>
        <h3> Our plan:</h3>
        <ul>
{ways.map((way) => (<WaysToTeach key={way.title}  {...way}/>))}
        </ul>
      </section>
      <section>
        <h3>
          Barabydibabubai
        </h3>
        <Button isActive={contentType === 'way'}  onClick={() => handleClick('way')}>Ways</Button>
        <Button isActive={contentType === 'easy'}  onClick={() => handleClick('easy')}>Easy</Button>
        <Button isActive={contentType === 'program'}  onClick={() => handleClick('program')}>Program</Button>

{contentType ? (
<p>{differences[contentType]}</p>
):(
<p>Press on button</p>
)}

      </section>
      </main>
    </div>
  )
}