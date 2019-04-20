import React from 'react'

const Water = (props) => (
  <div className= 'Water PepehaPage'>
   
      <form>
        <input className="FormBox" type="text" name='Water' onChange={props.handleChange}/>
        <h1>Awa</h1>
        <p>River or body of water</p>
      </form>

  </div>
)

export default Water