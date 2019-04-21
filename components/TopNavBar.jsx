import React from 'react'
import { Link } from 'react-router-dom';

const TopNavBar = () => (
<div className="topnav">
  <a className="active" href="#home"><strong>Home</strong></a>
  <a href="https://maoridictionary.co.nz/"><strong>Maori Dictionary</strong></a>
  <a href="http://www.maorilanguage.net/how-to-pronounce-maori/"><strong>Pronunciation</strong></a>
  <a href="https://www.toastmasters.org/resources/public-speaking-tips"><strong>Public speaking tips</strong></a>
<a href="https://www.otago.ac.nz/maori/world/te-reo-maori/mihi-introductions/index.html"><strong> Mihi Tips</strong></a>
  {/* <Route path="/Mountain" component={Mountain}/> */}
</div>
)

export default TopNavBar