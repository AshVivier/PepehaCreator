import React from 'react'

const Parents = (props) => (
  <div className= 'Parents PepehaPage2' >
  
<h1>Matua</h1>
<h3>(Parents)</h3>

      <form>
        <input className="ParentsFormBoxes" type="text" name='Mother' onChange={props.handleChange}/>
        <h1>Kowhaea</h1>
        <h3>Mother</h3>
      </form>
    

      <form>
        <input className="ParentsFormBoxes" type="text" name='Father' onChange={props.handleChange}/>
        <h1>Papara</h1>
        <h3>Father</h3>
        
      </form>

  </div>
)

export default Parents