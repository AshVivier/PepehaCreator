import React from 'react'

const Origin = (props) => (
  <div className= 'Origin PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Origin' onChange={props.handleChange}/>
        <h1>Whakatipuranga</h1>
        <h3>Origin</h3>
      </form>

  </div>
)

export default Origin