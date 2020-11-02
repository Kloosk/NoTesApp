import React, {useState} from 'react';
import styled from 'styled-components'
import ColorPicker from "../../../colorPicker/ColorPicker";
import {setBorder} from "../../../../redux";
import {useSelector} from "react-redux";

const Container = styled.div`
 left: 300vw;
 width: 100vw;
 transition: transform 0.5s ease; 
 transform: ${props => `translateX(${props.move}vw)`};
 position: absolute;
 padding: 0 5vw;
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
const P = styled.p`
  font-size: 1.5rem;
  margin: 0 10px 0 0;
  color: #F9B613;
  width: 120px;
`;
const StepThird = ({move}) => {
    const {border,font} = useSelector(state => state.note);
    const [show,setShow] = useState(false);
    const handleColor = () => {
        setShow(true);
        setTimeout(() =>{
            setShow(false);
        },500);
    };

    return (
        <Container move={move}>
            <H1><Span>G</Span>eneral</H1>
            <Flex>
                <P><Span>B</Span>order</P>
                <BtnColor color={border} onClick={handleColor}></BtnColor>
                <ColorPicker show={show} func={setBorder}/>
            </Flex>
            <Flex>
                <P><Span>F</Span>ont</P>
                <P>Arial</P>
            </Flex>
        </Container>
    );
};

export default StepThird;