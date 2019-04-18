import React from 'react'

const Water = (props) => (
  <div className= 'Water PepehaPage'>
   
      <form>
        <input className="FormBox" type="text" name='Water' onChange={props.handleChange}/>
      </form>

  </div>
)

export default Water