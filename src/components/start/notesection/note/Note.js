import React from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 250px;
  border: ${props => props.border};
  display: none;
  flex-direction: column;
  align-items: center;
  font-family: ${props => props.font};
  color: ${props => props.color};
  &:nth-child(5){
    display: flex;
    transition: transform 1s ease;
    transform: ${props => props.startnow && "translateY(200%)"};
  }
  @media (min-width: 768px) {
   display: none;
   &:nth-child(5){
    display: flex;
    transition: transform 1s ease;
    transform: ${props => props.startnow && "translateY(200%)"};
   }
   &:nth-child(4){
    display: flex;
    transition: transform 1s ease;
    transform: ${props => props.startnow && "translateY(200%)"};
   }
  }
  @media (min-width: 992px){
    display: flex;
    &:nth-child(1){
     transition: transform 1s ease;
     transform: ${props => props.startnow && "translateY(200%)"};
    }
    &:nth-child(2){
     transition: transform 2s ease;
     transform: ${props => props.startnow && "translateY(200%)"};
    }
    &:nth-child(3){
      transition: transform 3s ease;
     transform: ${props => props.startnow && "translateY(200%)"};
    }
    &:nth-child(4){
      transition: transform 4s ease;
     transform: ${props => props.startnow && "translateY(200%)"};
    }
    &:nth-child(5){
      display: none;
    }
    
  }
  
`;
const Title = styled.div`
  width: 100%;
  height: 25%;
  font-size: 2rem;
  background: ${props => props.bgTitle};
  position: relative;
`;
const Desc = styled.div`
  background: ${props => props.bgColor};
  border-top: ${props => props.border};
  padding: 10px 5px 0 15px;
  height: 80%;
  width: 100%;
`;
const P = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-family: ${props => props.font};
  font-size: 2rem;
`;
const PDesc = styled.p`
  font-family: ${props => props.font};
  font-size: 1.2rem;
`;
const Note = ({color,bgColor,bgTitle,font,titleTxt,descTxt,border}) => {
    const startnow = useSelector(state => state.startnow.startnow);
    console.log(startnow);
    return (
        <Container startnow={startnow} border={border} font={font} color={color}>
            <Title bgTitle={bgTitle}><P>{titleTxt}</P></Title>
            <Desc border={border} bgColor={bgColor}><PDesc>{descTxt}</PDesc></Desc>
        </Container>
    );
};

export default Note;