import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled(Link)`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  letter-spacing: 1px;
  color: #F9B613;
  text-decoration: none;
  @media(min-width: 768px){
    font-size: 3rem;
  }
`;
const Span = styled.span`
  color: #0798DA;
`;
const LinkLogin = () => {
    return (
        <Container to="/login"><Span>L</Span>ogin</Container>
    );
};

export default LinkLogin;