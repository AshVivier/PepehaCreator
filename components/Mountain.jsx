import React from 'react'

const Mountain = (props) => (
  <div className= 'Mountain PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Mountain' onChange={props.handleChange}/>
        <h1>Maunga</h1>
        <h3>Mountain</h3>
      </form>

  </div>
)



export default Mountain 