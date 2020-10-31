import React from 'react'
import styled from 'styled-components'
import Textarea from 'react-expanding-textarea'
import {useDispatch, useSelector} from "react-redux";
import {setTitle} from "../../../../redux";

const Container = styled(Textarea)`
  width: 100%;
  color: ${props => props.titlecolor};
  background: ${props => props.titlebg};
  font-size: ${props => props.titlesize};
  text-align: center;
  border: none;
  resize: none;
  outline: none;
  padding: 5px;
`;
const InputTitle = () => {
    const dispatch = useDispatch();
    const {titleColor,titleBg,titleSize} = useSelector(state => state.note);
    const handleChange = e => {
        dispatch(setTitle(e.target.value));
    };
    return (
        <Container titlecolor={titleColor} titlebg={titleBg} titlesize={titleSize} defaultValue="Title" maxLength="30" onChange={handleChange}/>
    )
};
export default InputTitle