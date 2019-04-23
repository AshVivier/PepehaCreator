import React from 'react'
import {Link} from 'react-router-dom'

const Origin = (props) => (
  <div className= 'Origin PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Origin' onChange={props.handleChange}/>
        <h1>Whakatipuranga</h1>
        <h3>Origin</h3>
      </form>
      <Link to='./CurrentHome' ><button className='CreateButton'><strong>Skip</strong></button></Link>

  </div>
)

export default Origin