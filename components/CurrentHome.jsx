import React from 'react'

const CurrentHome = (props) => (
  <div className= 'CurrentHome PepehaPage' >
  
      <form>
        <input className="FormBox" type="text" name='CurrentHome' onChange={props.handleChange}/>
        <h1>ahau e noho ana inaianei</h1>
        <h3>(Now living)</h3>
          
      </form>

  </div>
)


export default CurrentHome