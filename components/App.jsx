import React, { Component } from 'react'
// import React, from 'react';
import Intro from './Intro'

import Mountain from './Mountain'
import Water from './Water'
import Waka from './Waka'
import Iwi from './Iwi'
import Ancestory from './Ancestory'
import Whare from './Whare'
import Origin from './Origin'
import Parents from './Parents'
import Name from './Name'
import CurrentHome from './CurrentHome'
// import HamburgerMenu from './HamburgerMenu'
import {HashRouter as Router, Route} from 'react-router-dom'

import Results from './Results'
// import PrintButton from './PrintButton'


export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      Mountain: '', 
      Water: '',
      Waka: '',
      Iwi: '',
      Ancestory:'', 
      Whare:'',
      Origin:'',
      CurrentHome:'',
      Mother:'',
      Father:'',
      Name:''
    }

    this.handleChange = this.handleChange.bind(this)
}

handleChange(event){
  this.setState({
    [event.target.name]: event.target.value
  })
}

  render(){
    return (
//       // <div>
//         /* <Intro/>
//         <Mountain handleChange={this.handleChange}/>
//         <Water handleChange={this.handleChange}/>
//         <Waka handleChange={this.handleChange}/>
//         <Iwi handleChange={this.handleChange}/>
//         <Ancestory handleChange={this.handleChange}/>
//         <Whare handleChange={this.handleChange}/>
//         <Origin handleChange={this.handleChange}/>
//         <Parents handleChange={this.handleChange}/>
//         <Name handleChange={this.handleChange}/>
//         <CurrentHome handleChange={this.handleChange}/>
//         <Results />
//         {/* <HamburgerMenu /> */}
//         {/* <PrintButton /> */} 
// {/* 
//         <ul>

// /* Link components are used for linking to other views */

//    {/* <li><Link to="/Mountain">Mountain</Link></li>
//  <li><Link to="/">Intro</Link></li>




<Router>
 

      <div>

        <div>
          <Route exact path='/' component={Intro} />
          <div >
            <Route path='/Mountain' component={Mountain} />
            <Route path='/Water' component={Water}/>
            <Route path='/Waka' component={Waka} />
            <Route path='/Iwi' component={Iwi}/>
            <Route path='/Ancestory' component={Ancestory} />
            <Route path='/Whare' component={Whare}/>
            <Route path='/Origin' component={Origin} />
            <Route path='/CurrentHome' component={CurrentHome}/>
            <Route path='/Parents' component={Parents} />
            <Route path='/Name' component={Name}/>
            <Route path='/Results' component={Results}/>
          </div>
        </div>
      </div>
      </Router>
      )
        }}
