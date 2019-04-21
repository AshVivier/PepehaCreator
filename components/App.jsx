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

import Results from './Results'
// import PrintButton from './PrintButton'


import { Link, Route, Switch } from 'react-router-dom';


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
      <div>
        <Intro/>
        <Mountain handleChange={this.handleChange}/>
        <Water handleChange={this.handleChange}/>
        <Waka handleChange={this.handleChange}/>
        <Iwi handleChange={this.handleChange}/>
        <Ancestory handleChange={this.handleChange}/>
        <Whare handleChange={this.handleChange}/>
        <Origin handleChange={this.handleChange}/>
        <Parents handleChange={this.handleChange}/>
        <Name handleChange={this.handleChange}/>
        <CurrentHome handleChange={this.handleChange}/>
        <Results />
        {/* <HamburgerMenu /> */}
        {/* <PrintButton /> */}

        <ul>

/* Link components are used for linking to other views */

 <li><Link to="/Mountain">Mountain</Link></li>
 <li><Link to="/">Intro</Link></li>


</ul>
 <Route exact={true} path="/" component={Intro}/>
        {/* <Route path="/" component={Intro}/> */}
           <Route path="/Mountain" component={Mountain}/>
           <Route path="/Water" component={Water}/>

     </div>
    )
  }
}

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// );