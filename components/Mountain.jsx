import React from 'react'
import {Link} from 'react-router-dom'

const Mountain = (props) => (
  <div className= 'Mountain PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Mountain' onChange={props.handleChange}/>
        <h1>Maunga</h1>
        <h3>Mountain</h3>
      </form>

      <Link to='./Water' ><button className='CreateButton'><strong>Next</strong></button></Link>

  </div>
)


export default Mountain 