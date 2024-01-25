import Header from './Components/Header/Header'
import TeachingSection from './Components/TeachingSectoin'
import ActiveButtonSection from './Components/ActiveButtonSection'
import IntroSection from './Components/IntroSection'
import TabsSection from './Components/TabsSection'
import FeedbackSection from './Components/FeedbackSection'
import { useState } from 'react'


export default function App() {
  const [tab, SetTab] = useState('feedback')


  return (
  <>
      <Header />
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

      </main>
  </>   
  )
}