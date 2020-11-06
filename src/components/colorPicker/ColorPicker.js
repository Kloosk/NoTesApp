import React, {useEffect, useState} from 'react';
import { SketchPicker } from 'react-color'
import styled from 'styled-components'
import {useDispatch} from "react-redux";

const ContainerMobile = styled.div`
 position: absolute;
 top: 0;
 left: 50%;
 transform: translateX(-50%);
 display: ${props => props.displayy ? 'block' : 'none'};
 border: 2px solid #000;
 z-index: 6;
 @media (min-width: 768px) {
   display: none;
}
`;
const ContainerDesktop = styled.div`
 display: none;
 @media (min-width: 768px) {
     position: absolute;
     bottom: ${props => props.toppos ? '-280px' : 0};
     left: 125px;
     transform: translateX(-50%);
     display: ${props => props.displayy ? 'block' : 'none'};
     border: 2px solid #000;
     z-index: 6;
  }
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
 background: #fff;
 cursor: pointer;
`;
const ColorPicker = ({func,show,toppos}) => {
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
        <>
            <ContainerMobile displayy={display}>
                <Exit onClick={exitPicker}>&times;</Exit>
                <SketchPicker color={bg} onChangeComplete={handleChangeComplete}/>
            </ContainerMobile>
            <ContainerDesktop toppos={toppos} displayy={display}>
                <Exit onClick={exitPicker}>&times;</Exit>
                <SketchPicker color={bg} onChangeComplete={handleChangeComplete}/>
            </ContainerDesktop>

        </>
    );
};

export default ColorPicker;