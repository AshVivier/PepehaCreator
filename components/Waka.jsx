import React from 'react'

const Waka = (props) => (
  <div className= 'Waka PepehaPage'>
   
      <form>
        <input className="FormBox" type="text" name='Waka' onChange={props.handleChange}/>
      </form>

  </div>
)

export default Waka