// import React, { Component } from 'react';
// import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
// from 'mdbreact';

// class HamburgerMenu extends Component {
// state = {
//   collapseID: ''
// }

// toggleCollapse = collapseID => () => {
//   this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
// }

// render() {
//   return (
//     <router>
//     <MDBContainer>
//       <MDBNavbar color="light-blue lighten-4" style={{ marginTop: '20px' }} light>
//         <MDBContainer>
//           <MDBNavbarBrand>
//             Navbar
//           </MDBNavbarBrand>
//           <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
//           <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
//             <NavbarNav left>
//               <MDBNavItem active>
//                <MDBNavLink to="https://thecrashcourse.com/">Home</MDBNavLink>
//               </MDBNavItem>
//             </NavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </MDBContainer>
//     </router>
//     );
//   }
// }

// export default HamburgerMenu;