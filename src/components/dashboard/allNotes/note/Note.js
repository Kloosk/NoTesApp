import React from 'react';
import styled from 'styled-components'

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
  background: ${props => props.titleBg};
`;
const P = styled.p`
  color: ${props => props.textColor};
  font-family: ${props => props.font};
  font-size: ${props => props.textSize}rem;
`;
const Note = ({title,text,titleColor,titleBg,textColor,textBg,border,font,textSize,titleSize}) => {
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
};

export default Note;