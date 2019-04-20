import React from 'react'

const Ancestory = (props) => (
  <div className= 'Ancestory PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Ancestory' onChange={props.handleChange}/>
        <h1>Tangata</h1>
        <h3>Ancestory</h3>
      </form>

  </div>
)

export default Ancestory 



