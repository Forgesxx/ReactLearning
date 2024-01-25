import React from "react"
// export default function IntroSection(){
//     return(
//         <section>
//             <h1 className="centered">
//                 ResultUniversity 
//                 <h3 className="centered" style={{color: '#666'}}>
// Aloha
//                 </h3>
//             </h1>
//         </section>
//     )
// }
export default function IntroSection(){
    return React.createElement('section', null, 
    [React.createElement('h1',{className: 'centered'}, 'ResultUniversity' )], 
    React.createElement('h3', {className:'centered', style: {color:'#666    '}}, 'ALOHA'))
}