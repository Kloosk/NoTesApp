import React from 'react';
import styled from 'styled-components'
import bg from './file/bg.webp'

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url(${bg}) center/cover no-repeat;
`;
const Overlay = styled.div`
  background-color: #000;
  width: 100%;  
  height: 100%;
  position: absolute;
  opacity: 0.4;
`;
const Video = () => {
    return (
        <Container>
            <Overlay/>
        </Container>
    );
};

export default Video;