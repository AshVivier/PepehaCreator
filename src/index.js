import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx'
// import React from 'react'
// import ReactDOM from 'react-dom'

import Intro from '../components/Intro'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Intro/>,
    document.getElementById('app')
  )
})

// const title = 'Introduction to Pepeha Creator';
// const OtherTitle = 'To come'

// ReactDOM.render(
//   <div>
//   <h1>{title}</h1>
//   <h2>{OtherTitle}</h2>
  
//   </div>,
//   document.getElementById('app')
// );

