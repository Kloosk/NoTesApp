import React from 'react'
import styled from 'styled-components'
import Textarea from 'react-expanding-textarea'
import {rightTrue, setDesc, setMove} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";

const Container = styled(Textarea)`
  width: 100%;
  color: ${props => props.textcolor};
  background: ${props => props.textbg};
  font-size: ${props => props.textsize}rem;
  font-family: ${props => props.font};
  border: none;
  resize: none;
  outline: none;
  min-height: 170px;
  padding: 15px 5px 5px 5px;
`;
const InputDesc = () => {
    const dispatch = useDispatch();
    const {textSize,textColor,textBg,font,text} = useSelector(state => state.note);
    const handleChange = e => {
        dispatch(setDesc(e.target.value));

    };
    const handleMove = () => {
        dispatch(setMove(-200));
        dispatch(rightTrue());
    };
    return (
        <Container spellCheck="false" onClick={handleMove} font={font} textsize={textSize} textcolor={textColor} textbg={textBg} defaultValue={text} maxLength="1000" onBlur={handleChange}/>
    )
};
export default InputDesc