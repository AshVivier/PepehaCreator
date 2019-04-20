import React from 'react'

const Name = (props) => (
  <div className= 'Name PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Name' onChange={props.handleChange}/>
        <h1>Ingoa</h1>
          <h3>Name</h3>
        {/* go to the next page */}
      </form>

  </div>
)

export default Name