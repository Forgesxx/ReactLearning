import Header from './Components/Header/Header'
import TeachingSection from './Components/TeachingSectoin'
import ActiveButtonSection from './Components/ActiveButtonSection'
import IntroSection from './Components/IntroSection'
import TabsSection from './Components/TabsSection'
import FeedbackSection from './Components/FeedbackSection'
import { useState } from 'react'
import EffectSection from './Components/EffectSection'


export default function App() {
  const [tab, SetTab] = useState('effect')
  const [visible, setVisble] = useState(true)

  // setTimeout(()=>{
  //   setVisble(false)
  // }, 3000)


  return (
  <>
      {visible && <Header />}
      <main>
        <IntroSection/>
        <TabsSection active={tab} onChange={(current)=> SetTab(current)}/>     
         {tab === 'main' && (
    <>
         <TeachingSection />
      <ActiveButtonSection />
    </>)
    }  
{tab === 'feedback' &&   
<FeedbackSection/>
}

{tab === 'effect' &&   
<EffectSection/>
}  

      </main>
  </>   
  )
}