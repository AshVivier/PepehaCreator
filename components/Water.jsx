import React from 'react'
import {Link} from 'react-router-dom'

const Water = (props) => (
  <div className= 'Water PepehaPage'>
   
      <form>
        <input className="FormBox" type="text" name='Water' onChange={props.handleChange}/>
        <h1>Awa</h1>
        <p>River or body of water</p>
      </form>
      <Link to='./Waka' ><button className='CreateButton'><strong>Skip</strong></button></Link>  </div>
)

export default Water