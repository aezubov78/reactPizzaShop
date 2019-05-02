import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button'



export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  
         */}

         <Link to='/'>
         <img src={logo} alt='pizza' className="navbar-brand" />         
         </Link>

         <ul className="navbar-nav align-items-center">
           <li className="nav-item ml-5">
             <Link to="/" className="nav-link">
             <h4>Вибрати піцу</h4>
             </Link>
           </li>
         </ul>

         <Link to='/cart' className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
        <i className="fas fa-shopping-basket" /> мій кошик
          </span>
        </ButtonContainer>
         </Link>
         
      </NavWrapper>
    )
  }
}


const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitilize;
}
`
