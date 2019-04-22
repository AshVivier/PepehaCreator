import React from 'react'
import {Link} from 'react-router-dom'

const Ancestory = (props) => (
  <div className= 'Ancestory PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Ancestory' onChange={props.handleChange}/>
        <h1>Tangata</h1>
        <h3>Ancestory</h3>
      </form>
      <Link to='./Whare'><button className='CreateButton'><strong>Skip</strong></button></Link>
  </div>
)

export default Ancestory 



