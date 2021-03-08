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
  div{
      height: auto;
      width: auto;
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
    };
    const handlePaste = (e) => {
        if(e.clipboardData.types[0] === "text/html") {
            let image = (e.clipboardData || window.clipboardData).getData("text/html");
            image = image.match(/<img.*?src="(.*?)"[^\>]+>/g);

            let temp = document.createElement('div');
            temp.innerHTML= image[0];
            image = temp.firstChild;
            console.log(image.style);
            const wrapperDiv = document.createElement("div");
            wrapperDiv.style.setProperty("border","4px solid red");
            wrapperDiv.appendChild(image);

            const selection = window.getSelection();
            if (!selection.rangeCount) return false;
            selection.deleteFromDocument();
            selection.getRangeAt(0).insertNode(wrapperDiv);

            e.preventDefault();
        }
    };
    useEffect(() => {
        setTemp(text);
    },[text]);
    return(
        <>
            {edit ? (
                <Container contentEditable="true" spellCheck="false" onClick={handleMove} onPaste={handlePaste} texttransform={textTransform} font={font}
                           textsize={textSize} textcolor={textColor} textbg={textBg} aligndesc={alignDesc} value={temp}
                           onBlur={() => dispatch(setDesc(temp))} onChange={e => setTemp(e.target.value)}/>
            ):(
                <Container contentEditable="true" spellCheck="false" onClick={handleMove} onPaste={handlePaste} texttransform={textTransform} font={font}
                           textsize={textSize} textcolor={textColor} textbg={textBg} aligndesc={alignDesc}
                           placeholder="Your text" maxLength="800" value={temp}
                           onBlur={() => dispatch(setDesc(temp))} onChange={e => setTemp(e.target.value)}/>
            )}
        </>
        )
};
export default InputDesc