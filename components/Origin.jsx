import React from 'react'

const Origin = (props) => (
  <div className= 'Origin PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Origin' onChange={props.handleChange}/>
      </form>

  </div>
)

export default Origin