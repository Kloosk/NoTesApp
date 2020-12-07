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
  text-transform: ${props => props.titletransform};
  text-align: center;
  border: none;
  resize: none;
  outline: none;
  padding: 5px;
  ::placeholder { 
    color: ${props => props.titlecolor};
  }
`;
const InputTitle = ({edit}) => {
    const dispatch = useDispatch();
    const {titleColor,titleBg,titleSize,font,title,titleTransform} = useSelector(state => state.note);
    const handleChange = e => {
        dispatch(setTitle(e.target.value));
    };
    const handleMove = () => {
        dispatch(setMove(-100));
        dispatch(rightTrue());
    };
    if(edit){
        return (
            <Container spellCheck="false" onClick={handleMove} titletransform={titleTransform} font={font}
                       titlecolor={titleColor} titlebg={titleBg} titlesize={titleSize} defaultValue={title}
                       maxLength="50" onBlur={handleChange}/>
        )
    }else {
        return (
            <Container spellCheck="false" onClick={handleMove} titletransform={titleTransform} font={font}
                       titlecolor={titleColor} titlebg={titleBg} titlesize={titleSize} placeholder="Title"
                       maxLength="50" onBlur={handleChange}/>
        )
    }
};
export default InputTitle