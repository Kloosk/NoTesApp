import React from 'react';
import styled from 'styled-components'
import notes from './file/notes.mp4'

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;
const Overlay = styled.div`
  background-color: #000;
  width: 100%;  
  height: 100%;
  position: absolute;
  opacity: 0.3;
`;
const Video = () => {
    return (
        <Container>
            <Overlay/>
            <video id="vid" muted loop>
                <source type="video/mp4" src={notes}></source>
            </video>
        </Container>
    );
};

export default Video;