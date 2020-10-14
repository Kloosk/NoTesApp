import React from 'react';
import styled from 'styled-components'

const Container = styled.h1`
  font-size: 3rem;
  margin: 25px 0;
  letter-spacing: 1px;
  color: #F9B613;
  background-color: #fff;
  @media (min-width: 768px) {
    font-size: 5rem;
    margin-bottom: 50px;
  }
`;
const Span = styled.span`
  color: #0798DA;
`;
const Title = () => {
    return (
        <Container>
            <Span>L</Span>ogin
        </Container>
    );
};

export default Title;