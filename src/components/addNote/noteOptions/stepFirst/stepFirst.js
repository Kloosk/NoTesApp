import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import ColorPicker from "../../../colorPicker/ColorPicker";
import {setTitleBg, setTitleColor, setTitleSize, setTitleTransform} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";
import LinearPicker from "../../../linearPicker/LinearPicker";

const Container = styled.div`
 width: 100vw;
 height: 100%;
 transition: transform 0.5s ease; 
 transform: ${props => `translateX(${props.move}vw)`};
 position: absolute;
 left: 100vw;
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
  background: ${props => props.darkmode ? 'transparent' : '#E5E6DF'};
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
  padding: 15px 0;
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
  background: ${props => props.darkmode ? 'transparent' : '#E5E6DF'};
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
const StepFirst = ({move}) => {
    const dispatch = useDispatch();
    const {titleSize,titleBg,titleColor,titleTransform} = useSelector(state => state.note);
    const [darkmode,setDarkmode] = useState(false);
    const [letter,setLetter] = useState(0);//it changes border of selected transform
    useEffect(() => {
        if(titleTransform === "uppercase"){
            setLetter(2);
        }else if(titleTransform === "lowercase"){
            setLetter(1);
        }else if(titleTransform === "capitalize"){
            setLetter(3);
        }else{
            setLetter(0);
        }
    },[titleTransform]);
    ///////
    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);
    const titleDec = () => {
        if(titleSize >= 0.2) {
            dispatch(setTitleSize(-0.1));
        }
    };
    const titleInc = () => {
        dispatch(setTitleSize(0.1));
    };
    const [show,setShow] = useState(false);
    const [showBg,setShowBg] = useState(false);
    const [showBgLinear,setShowBgLinear] = useState(false);
    const handleColor = () => {
        setShow(true);
        setTimeout(() =>{
            setShow(false);
        },100);
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
            <H1><Span>T</Span>itle</H1>
            <Flex>
                <P><Span>B</Span>ackground</P>
                <BtnColor color={titleBg} onClick={handleColor}>Color</BtnColor>
                <BtnColor color={titleBg} onClick={handleColorLinear}>Gradient</BtnColor>
                <ColorPicker toppos={true} show={show} func={setTitleBg} normalcolor={titleBg}/>
                <LinearPicker toppos={true} show={showBgLinear} func={setTitleBg} linearcolor={titleBg}/>
            </Flex>
            <Flex>
                <P><Span>T</Span>ext</P>
                <BtnColor color={titleColor} onClick={handleColorBg}>Color</BtnColor>
                <ColorPicker toppos={true} show={showBg} func={setTitleColor}/>
            </Flex>
            <Flex>
                <P><Span>S</Span>ize</P>
                <BtnSize onClick={titleDec} darkmode={darkmode}>-</BtnSize>
                <Num>{titleSize.toFixed(1)}</Num>
                <BtnSize onClick={titleInc} darkmode={darkmode}>+</BtnSize>
            </Flex>
            <Flex>
                <P><Span>T</Span>ransform</P>
                <FlexTransform>
                <Divide>
                    <BtnTransform darkmode={darkmode} leter={letter===0 ? true : false} onClick={() => {dispatch(setTitleTransform("initial"))}}>Aa</BtnTransform>
                    <BtnTransform darkmode={darkmode} leter={letter===1 ? true : false} onClick={() => {dispatch(setTitleTransform("lowercase"))}}>aa</BtnTransform>
                </Divide>
                <Divide>
                    <BtnTransform darkmode={darkmode} leter={letter===2 ? true : false} onClick={() => {dispatch(setTitleTransform("uppercase"))}}>AA</BtnTransform>
                    <BtnTransform darkmode={darkmode} leter={letter===3 ? true : false} onClick={() => {dispatch(setTitleTransform("capitalize"))}}>AaAa</BtnTransform>
                </Divide>
                </FlexTransform>
            </Flex>
        </Container>
    );
};

export default StepFirst;