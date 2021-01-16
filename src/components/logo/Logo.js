import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import logo from '../../img/logo.png'
import logodark from '../../img/logoDark.png'

const Container = styled.nav`
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
const Logo = ({path}) => {
    const [darkmode,setDarkmode] = useState(false);
    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);
    return (
        <Container role="banner">
            <Linkk to={path}>
                {darkmode ? <Img src={logodark} alt="logo"/> : <Img src={logo} alt="logo"/>}
            </Linkk>
        </Container>
    );
};

export default Logo;