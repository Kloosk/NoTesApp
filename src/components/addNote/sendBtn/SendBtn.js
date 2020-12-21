import React,{useRef} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {loadingTrue} from "../../../redux";
import {useAdd} from "../../../hooks/useAdd";

const Container = styled.button`
  display: ${props => props.edit ? 'none' : 'block'};
  font-size: 1.2rem;
  margin: 3px 0;
  padding: 7px 14px;
  background: #E8EAE3;
  border: 2px solid #F9B613;
  color: #F9B613;
  position: relative;
  width: 150px;
  cursor: pointer;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 205px;
 }
  &::before{
    z-index: -1;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transition: transform 0.5s ease, opacity 0.5s ease;
    transform: translate(-50%,-50%) scaleX(0) skewX(4deg);
    opacity: 0;
    height: 100%;
    width: 10%;
    background-color: #0798DA;
  }
  &:hover::before{
    opacity: 1;
    transform: translate(-50%,-50%) scaleX(10) skewX(4deg);
  }
`;
const SendBtn = ({edit}) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.note);
    const btnRef = useRef(null);
    const {mutate} = useAdd();
    const sendData = () => {
        btnRef.current.setAttribute("disabled","disabled");//btn is only once click to avoid multiple add
        dispatch(loadingTrue());//turn on loading screen when note is sending and turn off when its over
        mutate(data); //send data to usemutation react-query
    };
    return (
        <Container ref={btnRef} edit={edit} onClick={sendData}>Add</Container>
    );
};

export default SendBtn;