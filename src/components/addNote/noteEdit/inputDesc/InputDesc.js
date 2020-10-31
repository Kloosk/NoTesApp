import React from 'react'
import styled from 'styled-components'
import Textarea from 'react-expanding-textarea'
import {setDesc} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";

const Container = styled(Textarea)`
  width: 100%;
  color: ${props => props.textcolor};
  background: ${props => props.textbg};
  font-size: ${props => props.textsize};
  border: none;
  resize: none;
  outline: none;
  min-height: 170px;
  padding: 15px 5px 5px 5px;
`;
const InputDesc = () => {
    const dispatch = useDispatch();
    const {textSize,textColor,textBg} = useSelector(state => state.note);
    const handleChange = e => {
        dispatch(setDesc(e.target.value));
    };
    return (
        <Container textsize={textSize} textcolor={textColor} textbg={textBg} defaultValue="Your text" maxLength="1000" onChange={handleChange}/>
    )
};
export default InputDesc