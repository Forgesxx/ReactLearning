import { useEffect, useState, useCallback } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import useInput from "../Hooks/useinput"
export default function EffectSection(){
    const input = useInput
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    
    const fetchUsers = useCallback(async ()=>{
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    },[])
    
    useEffect(()=>{
fetchUsers()
    },[fetchUsers])

  
        


    return(
<section>
    <h3>Effects</h3>
    <Button style={{marginBottom: '1rem'}} onClick={()=> setModal(true)}>Open information</Button>
    <Modal open = {modal}>
        <h3>Hello from modal</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam facere dignissimos accusantium sed! Est nemo dolorem reiciendis 
            iste nulla ipsa, ut blanditiis sequi quo modi! Rerum harum vitae quibusdam eos?
            </p>
            <Button onClick={()=> setModal(false)}>Close</Button>
    </Modal>
    {loading && <p>Loading...</p>}

    {!loading &&<><input type="text" className="control"  /> <ul>
        {users.map(user=><li key={user.id}>{user.name}</li>)}</ul></>}
</section>
    )
}