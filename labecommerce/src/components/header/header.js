import { HeaderContainer } from './StyledHeader';
import logo from "../../img/labecommerce-logo.png";
import React from 'react';

 function Header() {
   return (
   <HeaderContainer>
     <img src={logo}/>
   </HeaderContainer>
   )
}

export default Header;