import React from 'react'

const Iwi = (props) => (
  <div className= 'Iwi PepehaPage' >
  
      <form>
        <input className="FormBox" type="text" name='Iwi' onChange={props.handleChange}/>
        <h1>Iwi</h1>
          
      </form>

  </div>
)


export default Iwi