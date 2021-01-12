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
  background-color: ${props => props.darkmode ? 'transparent' : '#E6E7E1'};
  border: 2px solid #F9B613;
  color: #F9B613;
  position: relative;
  width: 150px;
  cursor: pointer;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 205px;
 }
 :hover{
  transform: translateY(1px);
 }
`;
const SendBtn = ({edit,darkmode}) => {
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
        <Container darkmode={darkmode} ref={btnRef} edit={edit} onClick={sendData}>Add</Container>
    );
};

export default SendBtn;