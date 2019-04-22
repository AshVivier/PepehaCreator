import React from 'react'
import {Link} from 'react-router-dom'

const Whare = (props) => (
  <div className= 'Whare PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Whare' onChange={props.handleChange}/>
        <h1>Marae</h1>
        <h3></h3>
      </form>
      <Link to='./Origin' ><button className='CreateButton'><strong>Skip</strong></button></Link>
  </div>
)

export default Whare

