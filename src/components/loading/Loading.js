import React from 'react';
import styled from 'styled-components';
import load from './gif/load.gif';

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 999;
`;
const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 200px;
`;
const Loading = () => {
    return (
        <Container>
            <Img src={load} alt="Loading"/>
        </Container>
    );
};

export default Loading;