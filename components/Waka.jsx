import React from 'react'
import {Link} from 'react-router-dom'

const Waka = (props) => (
  <div className= 'Waka PepehaPage'>
   
      <form>
        <input className="FormBox" type="text" name='Waka' onChange={props.handleChange}/>
        <h1>Waka</h1>
        <h3>Boat, or mode of transport that brought you here</h3>
      </form>

      <Link to='./Iwi' ><button className='CreateButton'><strong>Skip</strong></button></Link>
  </div>
)

export default Waka