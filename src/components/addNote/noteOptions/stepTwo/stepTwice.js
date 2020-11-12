import React, {useState} from 'react';
import styled from 'styled-components'
import ColorPicker from "../../../colorPicker/ColorPicker";
import {setDescBg, setDescColor, setDescSize} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";

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
  margin: 15px 0;
  padding: 10px 0;
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
const StepTwice = ({move}) => {
    const dispatch = useDispatch();
    const {textSize,textBg,textColor} = useSelector(state => state.note);
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
    return (
        <Container move={move}>
            <H1><Span>D</Span>escription</H1>
            <Flex>
                <P><Span>B</Span>ackground</P>
                <BtnColor color={textBg} onClick={handleColor}></BtnColor>
                <ColorPicker show={show} func={setDescBg}/>
            </Flex>
            <Flex>
                <P><Span>T</Span>ext</P>
                <BtnColor color={textColor} onClick={handleColorBg}></BtnColor>
                <ColorPicker show={showBg} func={setDescColor}/>
            </Flex>
            <Flex>
                <P><Span>S</Span>ize</P>
                <BtnSize onClick={descDec}>-</BtnSize>
                <Num>{textSize.toFixed(1)}</Num>
                <BtnSize onClick={descInc}>+</BtnSize>
            </Flex>
        </Container>
    );
};

export default StepTwice;