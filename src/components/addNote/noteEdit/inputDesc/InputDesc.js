import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {focusDesc, rightTrue, setDesc, setMove} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";

const Container = styled.div`
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
  padding: 15px 5px 5px 5px;
  ::placeholder { 
    color: ${props => props.textcolor};
  }
`;
const InputDesc = ({edit}) => {
    const dispatch = useDispatch();
    const {textSize,textColor,textBg,font,text,textTransform,alignDesc} = useSelector(state => state.note);
    const [temp,setTemp] = useState('');
    const handleMove = (e) => {
        dispatch(setMove(-200));
        dispatch(rightTrue());
        dispatch(focusDesc());
        console.log(e);
    };
    useEffect(() => {
        setTemp(text);
    },[text]);
    return(
        <>
            {edit ? (
                <Container contentEditable="true" spellCheck="false" onClick={handleMove} texttransform={textTransform} font={font}
                           textsize={textSize} textcolor={textColor} textbg={textBg} aligndesc={alignDesc} value={temp}
                           onBlur={() => dispatch(setDesc(temp))} onChange={e => setTemp(e.target.value)}/>
            ):(
                <Container contentEditable="true" spellCheck="false" onClick={handleMove} texttransform={textTransform} font={font}
                           textsize={textSize} textcolor={textColor} textbg={textBg} aligndesc={alignDesc}
                           placeholder="Your text" maxLength="800" value={temp}
                           onBlur={() => dispatch(setDesc(temp))} onChange={e => setTemp(e.target.value)}/>
            )}
        </>
        )
};
export default InputDesc