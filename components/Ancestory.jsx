import React from 'react'

const Ancestory = (props) => (
  <div className= 'Ancestory PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Ancestory' onChange={props.handleChange}/>
      </form>

  </div>
)

export default Ancestory 



