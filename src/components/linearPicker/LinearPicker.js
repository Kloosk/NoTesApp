import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SketchPicker} from "react-color";
import styled from "styled-components";
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
 width: 30px;
 height: 30px;
 border: 2px solid #000;
 color: #F9B613;
 font-size: 1.5rem;
 background: #fff;
 cursor: pointer;
 @media (min-width: 768px) {
   width: 60px;
   height: 60px;
   font-size: 3rem;
  }
`;
const PickColor = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  background: #fff;
`;
const ChooseColor = styled.button`
  width: 25px;
  height: 25px;
  border: ${props => props.current===0 ? '5px solid #F9B613' : '1px solid #F9B613'};
  cursor: pointer;
  background: ${props => props.choosecolor};
  border-radius: 50%;
  outline: none;
`;
const ChooseColor2 = styled(ChooseColor)`
  background: ${props => props.choosecolor};
  border: ${props => props.current===1 ? '5px solid #F9B613;' : '1px solid #F9B613'};
`;
const CurrentColor = styled.div`
  width: 70%;
  background: ${props => props.color};
  height: 25px;
  margin: 0 2px;
`;
const LinearPicker = ({func,show,toppos}) => {
   const dispatch = useDispatch();
   const [display,setDisplay] = useState(false);
   const [bg,setBg] = useState("#fff");
   const [color1,setColor1] = useState("red");
   const [color2,setColor2] = useState("blue");
   const [current,setCurrent] = useState(0);
    useEffect(() =>{
        show && setDisplay(true);
    },[show]);
    const handleChangeComplete = e => {
        if(current===0){
            setColor1(e.hex);
            dispatch(func(`linear-gradient(to right, ${e.hex}, ${color2})`));
        }else
        {
            setColor2(e.hex);
            dispatch(func(`linear-gradient(to right, ${color1}, ${e.hex})`));
        }

        setBg(e.hex);
    };
    const exitPicker = () => {
        setDisplay(false);
    };
    const handleChooseColor1 = () => {
        setCurrent(0);
    };
    const handleChooseColor2 = () => {
        setCurrent(1);
    };
    return (
        <>
            <ContainerMobile displayy={display}>
                <Exit onClick={exitPicker}>&times;</Exit>
                <PickColor>
                    <ChooseColor current={current} onClick={handleChooseColor1} choosecolor={color1}></ChooseColor>
                    <CurrentColor color={`linear-gradient(to right, ${color1}, ${color2})`}/>
                    <ChooseColor2 current={current} onClick={handleChooseColor2} choosecolor={color2}></ChooseColor2>
                </PickColor>
                <SketchPicker color={bg} onChangeComplete={handleChangeComplete}/>
            </ContainerMobile>
            <ContainerDesktop toppos={toppos} displayy={display}>
                <Exit onClick={exitPicker}>&times;</Exit>
                <PickColor>
                    <ChooseColor current={current} onClick={handleChooseColor1} choosecolor={color1}></ChooseColor>
                    <CurrentColor color={`linear-gradient(to right, ${color1}, ${color2})`}/>
                    <ChooseColor2 current={current} onClick={handleChooseColor2} choosecolor={color2}></ChooseColor2>
                </PickColor>
                <SketchPicker color={bg} onChangeComplete={handleChangeComplete}/>
            </ContainerDesktop>
        </>
    );
};
 export default LinearPicker