import Header from './Components/Header'
import {ways} from './data'
import WaysToTeach from './Components/WaysToTeach'


export default function App() {
  return (
    <div>
      <Header />
      <main>      
      <section>
        <h3>Our plan</h3>
        <ul>
<WaysToTeach title={ways[0].title} description={ways[0].description}></WaysToTeach>
<WaysToTeach {... ways[1]}></WaysToTeach>
<WaysToTeach {... ways[2]}></WaysToTeach>
<WaysToTeach {... ways[3]}></WaysToTeach>

        </ul>
      </section>
      </main>

    </div>
  )
}


