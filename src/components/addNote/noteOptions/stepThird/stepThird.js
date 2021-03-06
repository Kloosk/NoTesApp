import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import ColorPicker from "../../../colorPicker/ColorPicker";
import {fontOff, fontOn, setBorder, setFont, setStatus }from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";
import BorderSize from "./BorderSize";
import DropFile from "../../../dropzone/DropFile";

const Container = styled.div`
 left: 300vw;
 width: 100vw;
 transition: transform 0.5s ease; 
 transform: ${props => `translateX(${props.move}vw)`};
 position: absolute;
 padding: 0 5vw;
  @media (min-width: 768px) {
    position: static;
    width: 100%;
    transition: none;
    transform: none;
 }
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
const P = styled.p`
  font-size: 1.5rem;
  margin: 0 10px 0 0;
  color: #F9B613;
  width: 120px;
`;
const PBtn = styled.p`
  font-family: ${props => props.font};
  color: #F9B613;
  font-size: 1.5rem;
  margin: 0 10px 0 0;
`;
const Button = styled.button`
  display: flex;
  border: none;
  background: ${props => props.darkmode ? 'transparent' : '#E5E6DF'};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  padding: 0 5px;
`;
const Svg = styled.svg`
    color: #F9B613;
    width: 20px;
    height: 20px;
    ${Button}:hover{
    transform: translateY(1px);
    }
   @media (min-width: 768px) {
      transform: rotate(180deg);
    }
`;
const FontMenu = styled.div`
  position: absolute;
  top: 102%;
  left: 0;
  display: ${props => props.open ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #F9B613;
  padding: 5px 10px;
  background-color: ${props => props.darkmode ? '#231F20' : '#E6E7E1'};
  height: 150px;
  overflow-y: auto;
  &:nth-child(all){
    background-color: ${props => props.darkmode ? '#231F20' : '#E6E7E1'};
  }
  @media (min-width: 768px) {
    overflow: hidden;
    height: 300px;
    top: -300px;
  }
`;
const Btn = styled.div`
  width: 100%;
  font-family: ${props => props.font};
  border-bottom: 2px solid #F9B613;
  color: #F9B613;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  padding-bottom: 5px;
  :hover{
    transform: translateY(1px);
  }
  &:last-child{
    border: none;
  }
`;
const Checkbox = styled.input`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
const StepThird = ({move}) => {
    const dispatch = useDispatch();
    const fontMenu = useSelector(state => state.fontmenu.menu);
    const [darkmode,setDarkmode] = useState(false);
    const {border,font} = useSelector(state => state.note);
    const [show,setShow] = useState(false);
    const [currentStatus,setCurrentStatus] = useState(false);
    const checkRef = useRef(null);
    useEffect(() => {
        if(localStorage.getItem('statusnote') !== null){
            checkRef.current.checked = true;
            setCurrentStatus(true);
            dispatch(setStatus(true));
        }else{
            setCurrentStatus(false);
            dispatch(setStatus(false));
        }
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);// eslint-disable-line react-hooks/exhaustive-deps
    const handleColor = () => {
        setShow(true);
        setTimeout(() =>{
            setShow(false);
        },500);
    };
    const handleFont = () => {
        fontMenu ? dispatch(fontOff()) : dispatch(fontOn());
    };
    const handleChange = () => {
        if(checkRef.current.checked === true){
            dispatch(setStatus(true));
            setCurrentStatus(true);
        }else{
            dispatch(setStatus(false));
            setCurrentStatus(false);
        }
    };
    return (
        <Container move={move}>
            <H1><Span>G</Span>eneral</H1>
            <Flex>
                <P><Span>B</Span>order</P>
                <BtnColor color={border} onClick={handleColor}/>
                <ColorPicker show={show} func={setBorder}/>
                <BorderSize/>
            </Flex>
            <Flex>
                <P><Span>F</Span>ont</P>
                <Button onClick={handleFont} darkmode={darkmode}>
                    <PBtn font={font}>{font}</PBtn>
                    <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></Svg>
                    <FontMenu open={fontMenu} darkmode={darkmode}>
                            <Btn font='Amatic SC' onClick={() => {dispatch(setFont('Amatic SC'))}}>Amatic</Btn>
                            <Btn font='Anton' onClick={() => {dispatch(setFont('Anton'))}}>Anton</Btn>
                            <Btn font='Dancing Script' onClick={() => {dispatch(setFont('Dancing Script'))}}>Dancing</Btn>
                            <Btn font='Henny Penny' onClick={() => {dispatch(setFont('Henny Penny'))}}>Henny</Btn>
                            <Btn font='Lato' onClick={() => {dispatch(setFont('Lato'))}}>Lato</Btn>
                            <Btn font='Montserrat' onClick={() => {dispatch(setFont('Montserrat'))}}>Montserrat</Btn>
                            <Btn font='Roboto' onClick={() => {dispatch(setFont('Roboto'))}}>Roboto</Btn>
                            <Btn font='Turret Road' onClick={() => {dispatch(setFont('Turret Road'))}}>Turret</Btn>
                    </FontMenu>
                </Button>
            </Flex>
            <Flex>
                <P><Span>P</Span>rivate</P>
                <Checkbox ref={checkRef} onChange={handleChange} type="checkbox" checked={currentStatus}/>
            </Flex>
            <Flex>
                <DropFile/>
            </Flex>
        </Container>
    );
};

export default StepThird;