import React from 'react'

const CurrentHome = (props) => (
  <div className= 'CurrentHome PepehaPage' >
  
      <form>
        <input className="FormBox" type="text" name='CurrentHome' onChange={props.handleChange}/>
        <h1>CurrentHome</h1>
          
      </form>

  </div>
)


export default CurrentHome