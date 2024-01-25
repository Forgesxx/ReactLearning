import Button from "./Button/Button"
import { useState } from 'react'
import { differences } from "../data"
export default function ActiveButtonSection(){
    const [contentType , setContentType ] = useState()
 
    function handleClick(type){
     setContentType(type)

 } 
    return(
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
    )
}