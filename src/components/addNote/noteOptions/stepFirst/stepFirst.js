import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import ColorPicker from "../../../colorPicker/ColorPicker";
import {setTitleBg, setTitleColor, setTitleSize, setTitleTransform} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";

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
  background: #E6E7E1;
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
  background-color: ${props => props.color};
  width: 40px;
  height: 25px;
  cursor: pointer;
  border: 1px solid #F9B613;
  :hover{
    transform: translateY(1px);
  }
`;
const BtnTransform = styled.button`
  border: ${props => props.leter ? '2px solid #000000' : '2px solid #F9B613'};
  background: #E6E7E1;
  color: #F9B613;
  font-size: 1.4rem;
  width: 65px;
  height: 30px;
  cursor: pointer;
  margin: 2px 2px;
  outline: none;
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
    //it changes border of selected transform
    const [letter,setLetter] = useState(0);
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
    return (
        <Container move={move}>
            <H1><Span>T</Span>itle</H1>
            <Flex>
                <P><Span>B</Span>ackground</P>
                <BtnColor color={titleBg} onClick={handleColor}></BtnColor>
                <ColorPicker toppos={true} show={show} func={setTitleBg}/>

            </Flex>
            <Flex>
                <P><Span>T</Span>ext</P>
                <BtnColor color={titleColor} onClick={handleColorBg}></BtnColor>
                <ColorPicker toppos={true} show={showBg} func={setTitleColor}/>
            </Flex>
            <Flex>
                <P><Span>S</Span>ize</P>
                <BtnSize onClick={titleDec}>-</BtnSize>
                <Num>{titleSize.toFixed(1)}</Num>
                <BtnSize onClick={titleInc}>+</BtnSize>
            </Flex>
            <Flex>
                <P><Span>T</Span>ransform</P>
                <FlexTransform>
                <Divide>
                    <BtnTransform leter={letter===0 ? true : false} onClick={() => {dispatch(setTitleTransform("initial"))}}>Aa</BtnTransform>
                    <BtnTransform leter={letter===1 ? true : false} onClick={() => {dispatch(setTitleTransform("lowercase"))}}>aa</BtnTransform>
                </Divide>
                <Divide>
                    <BtnTransform leter={letter===2 ? true : false} onClick={() => {dispatch(setTitleTransform("uppercase"))}}>AA</BtnTransform>
                    <BtnTransform leter={letter===3 ? true : false} onClick={() => {dispatch(setTitleTransform("capitalize"))}}>AaAa</BtnTransform>
                </Divide>
                </FlexTransform>
            </Flex>
        </Container>
    );
};

export default StepFirst;