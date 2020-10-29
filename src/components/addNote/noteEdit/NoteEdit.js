import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import randomNote from "../data/randomNote";

const Container = styled.div`
  width: 80vw;
  min-height: 200px;
  border: 2px solid ${props => props.border};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: auto;
  }
`;
const Title = styled.div`
  min-height: 30px;
  padding: 5px;
  width: 100%;
  text-align: center;
  background: ${props => props.titleBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  color: ${props => props.titleColor};
  font-family: ${props => props.font};
  font-size: ${props => props.titleSize}rem;
`;
const Desc = styled.div`
  padding: 10px;
  width: 100%;
  min-height: 170px;
  background: ${props => props.textBg};
`;
const P = styled.p`
  color: ${props => props.textColor};
  font-family: ${props => props.font};
  font-size: ${props => props.textSize}rem;
`;
const NoteEdit = () => {
    const [randomData,setRandomData] = useState({});
    useEffect(() => {
        setRandomData(randomNote());
    },[]);
    if(randomData) {
        const {title,text,titleColor,titleBg,textColor,textBg,border,font,textSize,titleSize} = randomData;
        return (
            <Container border={border}>
                <Title titleBg={titleBg}>
                    <H1 titleColor={titleColor} titleSize={titleSize} font={font}>{title}</H1>
                </Title>
                <Desc textBg={textBg}>
                    <P textColor={textColor} font={font} textSize={textSize}>{text}</P>
                </Desc>
            </Container>
        );
    }else return null

};

export default NoteEdit;