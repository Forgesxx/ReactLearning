import Button from './Button/Button'
import { useState } from 'react'
export default function FeedbackSection()
{
    const [form, setForm] = useState({
        name: '',
        hasError: true,
        reason: 'help',
    })

   function handleNameChange(event){
    // setName(event.target.value)
    // setHasError(event.target.value.trim().length === 0  )
    setForm(prev => ({...prev, 
        name: event.target.value,
        hasError: event.target.value.trim().length === 0,}))
    
   }

    return(
    <section>
            <h3>CallBack</h3>
            <form>
                <label htmlFor="name">Your name</label>
                <input 
                type=" " 
                className="control" 
                value={form.name} 
                style={{
                    border: form.hasError ? '1px solid red' : null, 
                }}
                onChange={handleNameChange}/>
                <label htmlFor="reason">Reason for application:</label>
                <select 
                id="reason" 
                className="control" 
                value={form.reason} 
                onChange={event => setForm(...prev, event.target.value)}>
                <option value="Error">Error</option>
                <option value="Help">Need help</option>
                <option value="Suggest">Suggestion</option>
                </select>
                <Button type='button' disabled={form.hasError} isActive={!form.hasError} >Send</Button>

            </form>
    </section>
    )
}