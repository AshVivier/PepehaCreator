import React from 'react'


const Whare = (props) => (
  <div className= 'Whare PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Whare' onChange={props.handleChange}/>
      </form>

  </div>
)

export default Whare