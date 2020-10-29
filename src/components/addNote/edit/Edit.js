import React, {useState} from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 500vw;
`;
const StepZero = styled.div`
  width: 100vw;
  transition: transform 0.5s ease; 
  transform: ${props => `translateX(${props.move}vw)`};
  position: absolute;
  left: 0;
  margin-top: 50px;
`;
const StepFirst = styled.div`
 width: 100vw;
 transition: transform 0.5s ease; 
 transform: ${props => `translateX(${props.move}vw)`};
 position: absolute;
 left: 100vw;
`;
const StepTwice = styled.div`
  width: 100vw;
 transition: transform 0.5s ease; 
 transform: ${props => `translateX(${props.move}vw)`};
 position: absolute;
 left: 200vw;
`;
const StepThird = styled.div`
 left: 300vw;
 width: 100vw;
 transition: transform 0.5s ease; 
 transform: ${props => `translateX(${props.move}vw)`};
 position: absolute;
`;
const StepFourth = styled.div`
 left: 400vw;
 width: 100vw;
 transition: transform 0.5s ease; 
 transform: ${props => `translateX(${props.move}vw)`};
 position: absolute;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const Left = styled.button`
  background: none;
  border: none;
  padding: 2px;
  display: ${props => props.leftArrow ? 'block' : 'none'};
`;
const Right = styled.button`
  background: none;
  border: none;
  padding: 2px;
  display: ${props => props.rightArrow ? 'block' : 'none'};
`;
const Svg = styled.svg`
  width: 40px;
  height: 40px;
`;
const BtnColor = styled.button`
  background-color: red;
  width: 40px;
  height: 25px;
  border: none;
`;
const P = styled.p`
  font-size: 1.3rem;
  margin: 0 10px 15px 0;
`;
const BtnSize = styled.button`
  border: 2px solid #000;
  background: none;
  color: #000;
  padding: 7px 14px;
`;
const Num = styled.p`
  font-size: 1.3rem;
  color: #000;
  margin: 0 5px;
`;
const H1 = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
  text-align: center;
`;
//Zero
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Linkk = styled(Link)`

`;
const Button = styled.button`
  font-size: 1.2rem;
  margin: 3px 0;
  padding: 7px 14px;
  background: none;
  border: 2px solid #F9B613;
  color: #F9B613;
  position: relative;
  min-width: 150px;
  cursor: pointer;
  overflow: hidden;
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
const ButtonAdd = styled.button`
  font-size: 1.2rem;
  margin: 3px 0;
  padding: 7px 14px;
  background: none;
  border: 2px solid #F9B613;
  color: #F9B613;
  min-width: 150px;
`;
const Arrows = styled.div`
  width: 100%;
  transition: opacity 0.5s ease; 
  opacity: ${props => props.move ? '1' : '0'};
  visibility: ${props => props.move ? 'visible' : 'hidden'};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Edit = () => {
    const [move,setMove] = useState(0);
    const [rightArrow,setRightArrow] = useState(true);
    const [leftArrow,setLeftArrow] = useState(true);
    const moveRight = () => {
        setMove(prevState => prevState-100);
        if(move === -300) setRightArrow(false);
        else{
            setRightArrow(true);
            setLeftArrow(true);
        }
    };
    const moveLeft = () => {
        setMove(prevState => prevState+100);
        if(move === 0) setLeftArrow(false);
        else{
            setLeftArrow(true);
            setRightArrow(true);
        }
    };
    return (
        <>
            <Arrows move={move}>
                <Left leftArrow={leftArrow} onClick={moveLeft}><Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path></Svg></Left>
                <Right rightArrow={rightArrow} onClick={moveRight}><Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></Svg></Right>
            </Arrows>
            <Container>

                <StepZero move={move}>
                    <Center>
                        <Button>Generate</Button>
                        <Linkk to="/touse"><Button>Use</Button></Linkk>
                        <Button onClick={moveRight}>Create own</Button>
                        <Button>Add</Button>
                    </Center>
                </StepZero>

                <StepFirst move={move}>
                        <H1>Title</H1>
                        <Flex>
                            <P>Background</P>
                            <BtnColor></BtnColor>
                        </Flex>
                        <Flex>
                            <P>Color</P>
                            <BtnColor></BtnColor>
                        </Flex>
                        <Flex>
                            <P>Size</P>
                            <BtnSize>-</BtnSize>
                            <Num>1</Num>
                            <BtnSize>+</BtnSize>
                        </Flex>
                </StepFirst>

                <StepTwice move={move}>
                    <H1>Description</H1>
                    <Flex>
                        <P>Background</P>
                        <BtnColor></BtnColor>
                    </Flex>
                    <Flex>
                        <P>Color</P>
                        <BtnColor></BtnColor>
                    </Flex>
                    <Flex>
                        <P>Size</P>
                        <BtnSize>-</BtnSize>
                        <Num>1</Num>
                        <BtnSize>+</BtnSize>
                    </Flex>
                </StepTwice>

                <StepThird move={move}>
                    <H1>General</H1>
                    <Flex>Border</Flex>
                    <Flex>Font</Flex>
                </StepThird>

                <StepFourth move={move}>
                    <H1>Is everything correct?</H1>
                    <Center>
                        <Button>Edit</Button>
                        <Button>Add</Button>
                    </Center>
                </StepFourth>
            </Container>
        </>
    );
};

export default Edit;