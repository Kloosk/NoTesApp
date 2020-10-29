import React from 'react';
import styled from 'styled-components'
import bg from '../../img/bgReg.jpg'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${bg}) center/cover no-repeat;
`;
const H1 = styled.h1`
  font-size: 2rem;
  
`;
const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Name = styled.p`
  
`;
const Social = styled.div`

`;
const Authors = () => {
    return (
        <Container>
            <H1>Authors</H1>
            <Author>
                <Name>Łukasz Graś</Name>
                <Social>

                </Social>
            </Author>
        </Container>
    );
};

export default Authors;