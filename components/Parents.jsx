import React from 'react'

const Parents = (props) => (
  <div className= 'Parents PepehaPage' >
   
      <form>
        <input className="FormBox" type="text" name='Mother' onChange={props.handleChange}/>
      </form>

      <form>
        <input className="FormBox" type="text" name='Father' onChange={props.handleChange}/>
      </form>

  </div>
)

export default Parents