import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import DeleteBtn from "../deleteBtn/DeleteBtn";
import Textarea from "react-expanding-textarea";

const Container = styled.div`
  min-height: 200px;
  border: 2px solid ${props => props.border};
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 30px;
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
const Desc = styled(Textarea)`
  width: 100%;
  color: ${props => props.textcolor};
  background: ${props => props.textbg};
  font-size: ${props => props.textsize}rem;
  font-family: ${props => props.font};
  text-transform: ${props => props.texttransform};
  border: none;
  resize: none;
  outline: none;
  min-height: 170px;
  padding: 15px 10px 10px 10px;
  overflow-x: hidden;
`;
const Title = styled(Textarea)`
  width: 100%;
  color: ${props => props.titlecolor};
  background: ${props => props.titlebg};
  font-size: ${props => props.titlesize}rem;
  font-family: ${props => props.font};
  text-transform: ${props => props.titletransform};
  text-align: center;
  border: none;
  resize: none;
  outline: none;
  padding: 5px;
  min-height: 30px;
  overflow-x: hidden;
`;
const Note = ({title,text,titleColor,titleBg,textColor,textBg,border,font,textSize,titleSize,num,titleTransform,textTransform}) => {
    return (
        <Container border={border}>
            <Options>
                <DeleteBtn id={num}/>
                <Link to={`/edit/${num}`}>
                    <Btn>
                        <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></Svg>
                    </Btn>
                </Link>
            </Options>

            <Title readOnly disabled spellCheck="false" font={font} titletransform={titleTransform} titlecolor={titleColor} titlebg={titleBg} titlesize={titleSize} defaultValue={title}/>
            <Desc readOnly disabled spellCheck="false" font={font} texttransform={textTransform} textsize={textSize} textcolor={textColor} textbg={textBg} defaultValue={text}/>
        </Container>
    );
};

export default Note;