import React from 'react'


const Whare = (props) => (
  <div className= 'Whare PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Whare' onChange={props.handleChange}/>
        <h1>Marae</h1>
        <h3></h3>
      </form>

  </div>
)

export default Whare

