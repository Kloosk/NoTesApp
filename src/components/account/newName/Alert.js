import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  transition: transform 0.2s ease;
  transform: ${props => props.show ? 'translateY(0)': 'translateY(-100%)'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 2vh 0;
  z-index: 999;
  background-color: #E9EAE4;
  border-bottom: 3px solid #F9B613;
`;
const P = styled.p`
  font-size: 1.2rem;
`;
const Alert = ({msg,show}) => {
    return (
        <Container show={show}>
            <P>{msg}</P>
        </Container>
    );
};

export default Alert;