import React from 'react'
import {Link} from 'react-router-dom'

const Iwi = (props) => (
  <div className= 'Iwi PepehaPage' >
  
      <form>
        <input className="FormBox" type="text" name='Iwi' onChange={props.handleChange}/>
        <h1>Iwi</h1>
          
      </form>
      <Link to='./Ancestory' ><button className='CreateButton'><strong>Skip</strong></button></Link>
  </div>
)


export default Iwi