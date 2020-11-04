import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 80vw;
  min-height: 200px;
  border: 2px solid ${props => props.border};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
  @media (min-width: 768px) {
    width: 100%;
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
  min-height: 170px;
  padding: 10px;
  width: 100%;
  background: ${props => props.textBg};
`;
const P = styled.p`
  color: ${props => props.textColor};
  font-family: ${props => props.font};
  font-size: ${props => props.textSize}rem;
`;
const Options = styled.div`
  position: absolute;
  top: 50%;
  left: 101%;
  transition: transform 1s ease,opacity 1s ease;
  opacity: 0;
  transform: translate(-100%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Container}:hover &{
    opacity: 1;
    transform: translate(-50%,-50%);
  }
`;
const Btn = styled.button`
  border: 2px solid #F9B613;
  width: 45px;
  height: 45px;
  cursor: pointer;
  padding: 10px;
  position: relative;
  background-color: #fff;
`;
const Svg = styled.svg`
  color: #F9B613;
  ${Btn}:hover &{
    transform: scale(1.2);
  }
`;
const Note = ({title,text,titleColor,titleBg,textColor,textBg,border,font,textSize,titleSize,num}) => {
    return (
        <Container border={border}>
            <Options>
                <Link to={`/delete/${num}`}>
                    <Btn>
                        <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></Svg>
                    </Btn>
                </Link>
                <Link to={`/edit/${num}`}>
                    <Btn>
                        <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></Svg>
                    </Btn>
                </Link>
            </Options>
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