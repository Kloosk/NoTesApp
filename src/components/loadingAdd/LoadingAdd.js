import React from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";
import loadingGif from './loading.gif';

const Container = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  z-index: 999;
  position:fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.9;
  background: #000;
  overflow: hidden;
`;
const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  
`;
const H1 = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.2rem;
  color: #F9B613;
`;
const LoadingAdd = () => {
    const show = useSelector(state => state.showLoading.loading);
    return (
        <Container show={show}>
            <H1>Adding...</H1>
            <Img src={loadingGif} alt="Adding"/>
        </Container>
    );
};

export default LoadingAdd;