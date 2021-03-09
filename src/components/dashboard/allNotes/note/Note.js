import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import DeleteBtn from "../deleteBtn/DeleteBtn";
import Textarea from "react-expanding-textarea";

const Container = styled.div`
  min-height: 200px;
   border-style: solid;
  border-color: ${props => props.border};
  border-width: ${props => props.borderSize}px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 30px;
`;
const Options = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  transition: transform 1s ease,opacity 1s ease;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${Container}:hover &{
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%);
  }
`;
const Btn = styled.button`
  border: 2px solid #F9B613;
  width: 45px;
  height: 45px;
  cursor: pointer;
  padding: 10px;
  position: relative;
  background-color: ${props => props.darkmode ? "#231F20" : "#fff"};
`;
const Svg = styled.svg`
  color: #F9B613;
  ${Btn}:hover &{
    transform: scale(1.2);
  }
`;
const Desc = styled.div`
  width: 100%;
  color: ${props => props.textcolor};
  background: ${props => props.textbg};
  font-size: ${props => props.textsize}rem;
  font-family: ${props => props.font};
  text-transform: ${props => props.texttransform};
  text-align: ${props => props.aligndesc};
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
const Note = ({title,text,titleColor,titleBg,textColor,textBg,border,borderSize,font,textSize,titleSize,num,titleTransform,textTransform,alignDesc}) => {
    const [darkmode,setDarkmode] = useState(false);
    const textRef = useRef(null);
    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
        textRef.current.innerHTML = text;
    },[text]);
    return (
        <Container border={border} borderSize={borderSize}>
            <Options>
                <DeleteBtn id={num} darkmode={darkmode}/>
                <Link to={`/edit/${num}`}>
                    <Btn darkmode={darkmode}>
                        <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></Svg>
                    </Btn>
                </Link>
            </Options>

            <Title readOnly disabled spellCheck="false" font={font} titletransform={titleTransform} titlecolor={titleColor} titlebg={titleBg} titlesize={titleSize} defaultValue={title}/>
            <Desc ref={textRef} font={font} texttransform={textTransform} textsize={textSize} textcolor={textColor} textbg={textBg} aligndesc={alignDesc}/>
        </Container>
    );
};

export default Note;