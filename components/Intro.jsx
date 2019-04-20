import React from 'react'
import Mountain from './Mountain';

const title = 'Introduction to Pepeha Creator';
const OtherTitle = 'To come<p>skjhwdkjhqwk</p>'

const Intro = () =>(
  <div className = 'Intro PepehaPage'>
  <h1>{title}</h1>
  <h2>{OtherTitle}</h2>

  <a href='./Mountain' ><button className='CreateButton'>CREATE</button></a>
  
  </div>
)
  
export default Intro

// import React from 'react'

// const App = () => (
//   <div className='container'>
//     <img className='spinner' src='/images/paw.png' />
//   </div>
// )

// export default App