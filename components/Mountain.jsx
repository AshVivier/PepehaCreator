import React from 'react'

const Mountain = (props) => (
  <div className= 'Mountain PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Mountain' onChange={props.handleChange}/>
      </form>

  </div>
)



export default Mountain 