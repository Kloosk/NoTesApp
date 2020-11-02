import React, {useState} from 'react';
import styled from 'styled-components'
import ColorPicker from "../../../colorPicker/ColorPicker";
import {setTitleBg, setTitleColor, setTitleSize} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";

const Container = styled.div`
 width: 100vw;
 height: 100%;
 transition: transform 0.5s ease; 
 transform: ${props => `translateX(${props.move}vw)`};
 position: absolute;
 left: 100vw;
 padding: 0 5vw;
`;
const P = styled.p`
  font-size: 1.5rem;
  margin: 0 10px 0 0;
  color: #F9B613;
  width: 120px;
`;
const BtnSize = styled.button`
  border: 2px solid #F9B613;
  background: none;
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
const StepFirst = ({move}) => {
    const dispatch = useDispatch();
    const {titleSize,titleBg,titleColor} = useSelector(state => state.note);
    const titleDec = () => {
        dispatch(setTitleSize(-0.1));
    };
    const titleInc = () => {
        dispatch(setTitleSize(0.1));
    };
    const [show,setShow] = useState(false);
    const handleColor = () => {
        setShow(true);
        setTimeout(() =>{
            setShow(false);
        },500);
    };
    return (
        <Container move={move}>
            <H1><Span>T</Span>itle</H1>
            <Flex>
                <P><Span>B</Span>ackground</P>
                <BtnColor color={titleBg} onClick={handleColor}></BtnColor>
                <ColorPicker show={show} func={setTitleBg}/>

            </Flex>
            <Flex>
                <P><Span>C</Span>olor</P>
                <BtnColor color={titleColor} onClick={handleColor}></BtnColor>
                <ColorPicker func={setTitleColor}/>
            </Flex>
            <Flex>
                <P><Span>S</Span>ize</P>
                <BtnSize onClick={titleDec}>-</BtnSize>
                <Num>{titleSize.toFixed(1)}</Num>
                <BtnSize onClick={titleInc}>+</BtnSize>
            </Flex>
        </Container>
    );
};

export default StepFirst;