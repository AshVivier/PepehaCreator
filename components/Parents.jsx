import React from 'react'

const Parents = (props) => (
  <div className= 'Parents PepehaPage' >
  
<h1>Matua</h1>
<h3>(Parents)</h3>

      <form>
        <input className="ParentsFormBoxes" type="text" name='Mother' onChange={props.handleChange}/>
        <h1>Mother</h1>
      </form>
    

      <form>
        <input className="ParentsFormBoxes" type="text" name='Father' onChange={props.handleChange}/><h1>Father</h1>
      </form>

  </div>
)

export default Parents