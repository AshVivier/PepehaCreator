import React from 'react'
import PrintButton from './PrintButton'
import Mountain from './Mountain'
import Water from './Water'
import Waka from './Waka'
import Iwi from './Iwi'
import Ancestory from './Ancestory'
import Whare from './Whare'
import Origin from './Origin'
import Parents from './Parents'
import Mother from './Parents'
import Father from './Parents'
import Name from './Name'
import CurrentHome from './CurrentHome'
import {Link} from 'react-router-dom'


const Results= () =>(
 <div className= 'Results PepehaPage'>
   <h3>Your Pepeha</h3>

       <p> Ko {Mountain} te Maunga </p>
        <p>Ko {Water} te Awa</p>
        <p>Ko {Waka} te Waka</p>
        <p>Ko {Iwi} te Iwi</p>
        <p>Ko {Ancestory} te Tangata</p>
        <p>Ko {Whare} te Whare</p>
        <p>Ko {Origin} toku Whakatipuranga </p>
        <p>Ko {CurrentHome} ahau e noho ana inaianei</p>
        <p>Ko {Mother}raua Ko {Father} Oku matua</p>
       <p> Ko {Name} toku ingoa </p>
  
      
       <Link to='./' ><button><strong>Home</strong></button></Link>


<PrintButton />
</div>
)

export default Results