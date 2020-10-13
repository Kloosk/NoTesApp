import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.nav`
  font-family: 'Chilanka', cursive;
  position: absolute;
  top: 20px;
  left: 35px;
  cursor: pointer;
`;
const Linkk = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const H1 = styled.h1`
  font-size: 3rem;
  color: #F9B613;
  letter-spacing: 1px;
`;
const Span = styled.span`
  font-size: 3.1rem;
  color: #0798DA;
`;
const Logo = () => {
    return (
        <Container>
            <Linkk to="/">
                <H1>No<Span>T</Span>es</H1>
            </Linkk>
        </Container>
    );
};

export default Logo;