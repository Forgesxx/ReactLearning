import WaysToTeach from './WaysToTeach'
import {ways, } from '../data'
export default function TeachingSection(){
    return(
        <section>
        <h3> Our plan:</h3>
        <ul>
{ways.map((way) => (<WaysToTeach key={way.description}  {...way}/>))}
        </ul>
      </section>
    )
}