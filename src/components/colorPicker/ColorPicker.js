import React, {useEffect, useState} from 'react';
import { SketchPicker } from 'react-color'
import styled from 'styled-components'
import {useDispatch} from "react-redux";

const Container = styled.div`
 position: absolute;
 top: 0;
 left: 50%;
 transform: translateX(-50%);
 display: ${props => props.display ? 'block' : 'none'};
 border: 2px solid #000;
`;
const Exit = styled.button`
 position: absolute;
 left: 102%;
 top: -2px;
 width: 60px;
 height: 60px;
 border: 2px solid #000;
 color: #F9B613;
 font-size: 3rem;
 background: transparent;
`;
const ColorPicker = ({func,show}) => {
    const [display,setDisplay] = useState(false);
    const dispatch = useDispatch();
    const [bg,setBg] = useState("#fff");
    useEffect(() =>{
        show && setDisplay(true);
    },[show]);
    const handleChangeComplete = e => {
      dispatch(func(e.hex));
      setBg(e.hex);
    };
    const exitPicker = () => {
        setDisplay(false);
    };
    return (
        <Container display={display}>
            <Exit onClick={exitPicker}>&times;</Exit>
            <SketchPicker color={bg} onChangeComplete={handleChangeComplete}/>
        </Container>
    );
};

export default ColorPicker;