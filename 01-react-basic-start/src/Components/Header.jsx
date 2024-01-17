import logo from '/logo-name.svg'
export default function Header(){
    const time = new Date()
    return(
  
      <header>
 
        <img src={logo} alt="" />
        <span>Time now: {time.toLocaleTimeString()}</span>
      </header>
    )
  }
  