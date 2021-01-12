import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";
import darkload from "../loading/gif/loadDark.gif";
import load from "../loading/gif/load.gif";

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
const H1 = styled.h1`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.2rem;
  color: ${props => props.darkmode ? "#fff" : "#000"};
`;
const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 200px;
`;
const ImgDark = styled(Img)`
  width: 500px;
  @media (min-width: 768px) {
    width: 800px;
  }
`;
const LoadingAdd = () => {
    const show = useSelector(state => state.showLoading.loading);
    const [darkmode,setDarkmode] = useState(false);
    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);
    return (
        <Container show={show}>
            <H1>Adding...</H1>
            {darkmode ? <ImgDark src={darkload} alt="Loading"/> : <Img src={load} alt="Loading"/>}
        </Container>
    );
};
export default LoadingAdd;