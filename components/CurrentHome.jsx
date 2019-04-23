import React from 'react'
import {Link} from 'react-router-dom'

const CurrentHome = (props) => (
  <div className= 'CurrentHome PepehaPage' >
  
      <form>
        <input className="FormBox" type="text" name='CurrentHome' onChange={props.handleChange}/>
        <h1>ahau e noho ana inaianei</h1>
        <h3>(Now living)</h3>
          
      </form>
      <Link to='./Parents' ><button className='CreateButton'><strong>Skip</strong></button></Link>
  </div>
)


export default CurrentHome