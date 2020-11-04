import React from 'react'
import styled from 'styled-components'
import Textarea from 'react-expanding-textarea'
import {useDispatch, useSelector} from "react-redux";
import {rightTrue, setMove, setTitle} from "../../../../redux";

const Container = styled(Textarea)`
  width: 100%;
  color: ${props => props.titlecolor};
  background: ${props => props.titlebg};
  font-size: ${props => props.titlesize}rem;
  font-family: ${props => props.font};
  text-align: center;
  border: none;
  resize: none;
  outline: none;
  padding: 5px;
`;
const InputTitle = () => {
    const dispatch = useDispatch();
    const {titleColor,titleBg,titleSize,font} = useSelector(state => state.note);
    const handleChange = e => {
        dispatch(setTitle(e.target.value));
    };
    const handleMove = () => {
        dispatch(setMove(-100));
        dispatch(rightTrue());
    };
    return (
        <Container spellCheck="false" onClick={handleMove} font={font} titlecolor={titleColor} titlebg={titleBg} titlesize={titleSize} defaultValue="Title" maxLength="30" onBlur={handleChange}/>
    )
};
export default InputTitle