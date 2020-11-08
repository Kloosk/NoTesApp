import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import logo from '../../img/logo.png'

const Container = styled.nav`
  font-family: 'Chilanka', cursive;
  position: absolute;
  top: 5px;
  left: 0;
  cursor: pointer;
`;
const Linkk = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const Img = styled.img`
  width: 150px;
  @media(min-width: 768px){
    width: 210px;
  }
`;
const Logo = () => {
    return (
        <Container role="banner">
            <Linkk to="/">
                <Img src={logo} alt="logo"/>
            </Linkk>
        </Container>
    );
};

export default Logo;