import { HeaderContainer } from './StyledHeader';
import logo from "../../img/labecommerce-logo.png";
import React from 'react';

 export function Header() {
   return (
   <HeaderContainer>
     <img src={logo}/>
   </HeaderContainer>
   )
}