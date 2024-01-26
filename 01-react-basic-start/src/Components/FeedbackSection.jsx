import Button from './Button/Button'
import { useState } from 'react'


function StateVsRef(){
    const [stateVsRef, setStateVsRef] = useState('')
    const [show, setShow] = useState('true')

    function handleKeyDown(event){
        if(event.key === 'Enter'){
        setShow(true)}
    }
    return(
        <div>

            <h3>Input: {show && stateVsRef} </h3> 
   
            <input type='text'
            value={stateVsRef}
            onKeyDown={handleKeyDown }
            onChange={(e)=> setStateVsRef(e.target.value)}
            ></input>
        </div>
    )
    
}
export default function FeedbackSection()
{
const [name, setName] = useState('')
const [hasError, setHasError] = useState(false)
const [reason, setReason] = useState('help')


   function handleNameChange(event){
      setName(event.target.value)
    
      setHasError(event.target.value.trim().length === 0)
      
   }
   function toggleError(){
    setHasError((prev)=> !prev)

   }

    return (
    <section>
         <Button onClick={toggleError}>Toggle error</Button>
            <h3>CallBack</h3>
            <form style={{marginBottom:'1rem'}}>
                <label htmlFor="name">Your name</label>
                <input 
                type=" " 
                className="control" 
                value={name} 
                style={{
                    border: hasError ? '1px solid red' : null,
                }}
                onChange={handleNameChange}/>
                <label htmlFor="reason">Reason for application:</label>
                <select 
                id="reason" 
                className="control" 
                value={reason} 
                onChange={event => setReason(event.target.value)}>
                <option value="error">Error</option>
                <option value="help">Need help</option>
                <option value="suggest">Suggestion</option>
                </select>
                <Button type='button' disabled={hasError} isActive={!hasError} >Send</Button>

            </form>
            <pre>
            Name: {name} <br />    
            reason: {reason}
            </pre> 
           <StateVsRef />
    </section>
    )
}