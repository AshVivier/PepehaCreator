import React from 'react'

const Name = (props) => (
  <div className= 'Name PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Name' onChange={props.handleChange}/>
      </form>

  </div>
)

export default Name