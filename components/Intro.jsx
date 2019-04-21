import React from 'react'
import TopNavBar from './TopNavBar';


const title = 'Kia ora. Welcome to Pepeha Creator';
const OtherTitle = 'The pepeha is the way to introduce yourself in Maori.'
const Body1= 
'When thinking about preparing to speak during mihimihi, it is vital that you consider the kaupapa (purpose) of the hui (meeting) you are attending so as to ensure that: a) it is appropriate for you to stand and speak; and b) that your mihi (speech) or pepeha is suited to the occasion.'

const Body2= 'In the above navigation you will see some handy links to help you research what is appropriate for your personal pepeha. Talk to your family and have a think about what journey you will take people on, what is important to you?. Enjoy your learning journey!!'

const Body3= 'When you are ready, click create, enter the fields, and you will have the option of printing out your very own Pepeha at the end'

const Intro = () =>(

  <div className = 'Intro'> 
    <TopNavBar />
   <h1>{title}</h1>
  <h2>{OtherTitle}</h2>
  <h3>{Body1}</h3>
  <h3>{Body2}</h3>
  <h3>{Body3}</h3>

  <a href='./Mountain' ><button className='CreateButton'><strong>CREATE</strong></button></a>

 
  <footer class="footer">&copy; Copyright 2019 HTML.am </footer>

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