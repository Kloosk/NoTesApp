import React from 'react';
import styled from 'styled-components'

const Container = styled.h1`
  font-size: 5rem;
  margin-bottom: 50px;
  letter-spacing: 1px;
  color: #F9B613;
`;
const Span = styled.span`
  color: #0798DA;
`;
const Title = () => {
    return (
        <Container>
            <Span>R</Span>egister
        </Container>
    );
};

export default Title;