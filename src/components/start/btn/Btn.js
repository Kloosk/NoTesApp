import React from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {show} from "../../../redux";

const Container = styled.button`
  border: 4px solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 3rem;
  width: 320px;
  height: 100px;
  cursor: pointer;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  transition: border 1s ease;
  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 4px solid #0798DA;
    background-color: #FDD577;
    height: 70%;
    width: 100%;
    transform: translateY(103%);
    transition: transform 1s ease;
    z-index: -1;
  }
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-color: #F9B613;
    transform: translateY(-103%);
    transition: transform 1s ease;
    z-index: -1;
  }
  &:hover{
    border: 4px solid #0798DA;
  }
  &:hover::after, &:hover::before{
    transform: translateY(0);
  }
`;
const P = styled.p`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  transition: transform 0.3s ease, color 0.3s ease ;
  ${Container}:hover &{
    transform: translate(-50%,-30%);
    color: #0798DA;
  }
`;
const Btn = () => {
    console.log("Btn render");
    const dispatch = useDispatch();
    return (
        <Container onClick={() => dispatch(show())}><P data-test="startBtnTxt">Start now</P></Container>
    );
};

export default Btn;