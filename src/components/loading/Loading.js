import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import load from './gif/load.gif';
import darkload from './gif/loadDark.gif'

const Container = styled.div`
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.darkmode ? "#000" : "#fff"};
  z-index: 999;
`;
const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 200px;
`;
const ImgDark = styled(Img)`
  width: 50%;
`;
const Loading = () => {
    const [darkmode,setDarkmode] = useState(false);
    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);
    return (
        <Container darkmode={darkmode}>
            {darkmode ? <ImgDark src={darkload} alt="Loading"/> : <Img src={load} alt="Loading"/>}
        </Container>
    );
};

export default Loading;