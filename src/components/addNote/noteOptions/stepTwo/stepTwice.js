import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import ColorPicker from "../../../colorPicker/ColorPicker";
import {setAlignDesc, setDescBg, setDescColor, setDescSize, setTextTransform} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";
import LinearPicker from "../../../linearPicker/LinearPicker";

const Container = styled.div`
 width: 100vw;
 transition: transform 0.5s ease; 
 transform: ${props => `translateX(${props.move}vw)`};
 position: absolute;
 left: 200vw;
 padding: 0 5vw;
 @media (min-width: 768px) {
    position: static;
    width: 100%;
    transition: none;
    transform: none;
 }
`;
const P = styled.p`
  font-size: 1.5rem;
  margin: 0 10px 0 0;
  color: #F9B613;
  @media (min-width: 768px) {
    width: 120px;
 }
`;
const BtnSize = styled.button`
  border: 2px solid #F9B613;
  background-color: ${props => props.darkmode ? '#231F20' : '#E6E7E1'};
  color: #F9B613;
  font-size: 1.4rem;
  width: 45px;
  height: 30px;
  cursor: pointer;
  :hover{
    transform: translateY(1px);
  }
`;
const Num = styled.p`
  font-size: 1.8rem;
  color: #F9B613;
  margin: 0 10px;
`;
const H1 = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
  text-align: center;
  color: #F9B613;
`;
const Span = styled.span`
  color: #0798DA;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 10px 0;
  border-bottom: 2px solid #F9B613;
  @media (min-width: 768px) {
    position: relative;
  }
`;
const BtnColor = styled.button`
  width: auto;
  height: 25px;
  padding: 1px 3px;
  border: 1px solid #F9B613;
  color: #F9B613;
  background: transparent;
  font-size: 1rem; 
  cursor: pointer;
  margin-right: 10px;
  :hover{
    transform: translateY(1px);
  } 
`;
const BtnTransform = styled.button`
  border: ${props => props.leter ? '2px solid #000000' : '2px solid #F9B613'};
  background-color: ${props => props.darkmode ? '#231F20' : '#E6E7E1'};
  color: #F9B613;
  font-size: 1.4rem;
  width: 65px;
  height: 30px;
  cursor: pointer;
  margin: 2px 2px;
  outline: none;
  :hover{
    transform: translateY(1px);
  }
`;
const FlexTransform = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Divide = styled.div`
  display: flex;
`;
const BtnAlign = styled.button`
  border: 1px solid #F9B613;
  padding: 2px;
  background-color: ${props => props.darkmode ? 'transparent' : '#E6E7E1'};
  cursor: pointer;
  margin-left: 7px;
  :hover{
    transform: translateY(1px);
  }
  @media (min-width: 768px) {
    margin: 0;
    padding: 0;
    &:nth-child(3){
      margin: 0 7px;
    }
  }
`;
const Svg = styled.svg`
  width: 30px;
  height: 30px;
  color: #F9B613;
  @media (min-width: 768px) {
      width: 45px;
      height: 30px;
  }
`;
const StepTwice = ({move}) => {
    const dispatch = useDispatch();
    const {textSize,textBg,textTransform} = useSelector(state => state.note);
    const [darkmode,setDarkmode] = useState(false);
    const [letter,setLetter] = useState(0); //it changes border of selected transform
    useEffect(() => {
        if(textTransform === "uppercase"){
            setLetter(2);
        }else if(textTransform === "lowercase"){
            setLetter(1);
        }else if(textTransform === "capitalize"){
            setLetter(3);
        }else{
            setLetter(0);
        }
    },[textTransform]);
    useEffect(() =>{
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);

    const descInc = () => {
        dispatch(setDescSize(0.1));
    };
    const descDec = () => {
        if(textSize >= 0.2) {
            dispatch(setDescSize(-0.1));
        }
    };
    const [show,setShow] = useState(false);
    const [showBg,setShowBg] = useState(false);
    const [showBgLinear,setShowBgLinear] = useState(false);
    const handleColor = () => {
        setShow(true);
        setTimeout(() =>{
            setShow(false);
        },500);
    };
    const handleColorBg = () => {
        setShowBg(true);
        setTimeout(() =>{
            setShowBg(false);
        },100);
    };
    const handleColorLinear = () => {
        setShowBgLinear(true);
        setTimeout(() =>{
            setShowBgLinear(false);
        },100);
    };
    return (
        <Container move={move}>
            <H1><Span>D</Span>escription</H1>
            <Flex>
                <P><Span>B</Span>ackground</P>
                <BtnColor onClick={handleColor}>Color</BtnColor>
                <BtnColor onClick={handleColorLinear}>Gradient</BtnColor>
                <ColorPicker show={show} func={setDescBg} normalcolor={textBg}/>
                <LinearPicker toppos={true} show={showBgLinear} func={setDescBg} linearcolor={textBg}/>
            </Flex>
            <Flex>
                <P><Span>T</Span>ext</P>
                <BtnColor onClick={handleColorBg}>Color</BtnColor>
                <ColorPicker show={showBg} func={setDescColor}/>
            </Flex>
            <Flex>
                <P><Span>S</Span>ize</P>
                <BtnSize onClick={descDec} darkmode={darkmode}>-</BtnSize>
                <Num>{textSize.toFixed(1)}</Num>
                <BtnSize onClick={descInc} darkmode={darkmode}>+</BtnSize>
            </Flex>
            <Flex>
                <P><Span>A</Span>lign</P>
                <BtnAlign darkmode={darkmode} onClick={() => dispatch(setAlignDesc("left"))}><Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="align-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></Svg></BtnAlign>
                <BtnAlign darkmode={darkmode} onClick={() => dispatch(setAlignDesc("center"))}><Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="align-center" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM108.1 96h231.81A12.09 12.09 0 0 0 352 83.9V44.09A12.09 12.09 0 0 0 339.91 32H108.1A12.09 12.09 0 0 0 96 44.09V83.9A12.1 12.1 0 0 0 108.1 96zm231.81 256A12.09 12.09 0 0 0 352 339.9v-39.81A12.09 12.09 0 0 0 339.91 288H108.1A12.09 12.09 0 0 0 96 300.09v39.81a12.1 12.1 0 0 0 12.1 12.1z"></path></Svg></BtnAlign>
                <BtnAlign darkmode={darkmode} onClick={() => dispatch(setAlignDesc("right"))}><Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="align-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 224h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm416 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 44.83v38.34A12.82 12.82 0 0 0 172.83 96h262.34A12.82 12.82 0 0 0 448 83.17V44.83A12.82 12.82 0 0 0 435.17 32zm0 256H172.83A12.82 12.82 0 0 0 160 300.83v38.34A12.82 12.82 0 0 0 172.83 352h262.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288z"></path></Svg></BtnAlign>
            </Flex>
            <Flex>
                <P><Span>T</Span>ransform</P>
                <FlexTransform>
                    <Divide>
                        <BtnTransform darkmode={darkmode} leter={letter===0 ? true : false} onClick={() => {dispatch(setTextTransform("initial"))}}>Aa</BtnTransform>
                        <BtnTransform darkmode={darkmode} leter={letter===1 ? true : false} onClick={() => {dispatch(setTextTransform("lowercase"))}}>aa</BtnTransform>
                    </Divide>
                    <Divide>
                        <BtnTransform darkmode={darkmode} leter={letter===2 ? true : false} onClick={() => {dispatch(setTextTransform("uppercase"))}}>AA</BtnTransform>
                        <BtnTransform darkmode={darkmode} leter={letter===3 ? true : false} onClick={() => {dispatch(setTextTransform("capitalize"))}}>AaAa</BtnTransform>
                    </Divide>
                </FlexTransform>
            </Flex>
        </Container>
    );
};

export default StepTwice;