import React, {useEffect, useRef, useState} from 'react'
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
    const containerRef = useRef(null);

    const handleMove = (e) => {
        dispatch(setMove(-200));
        dispatch(rightTrue());
        dispatch(focusDesc());
    };
    const handlePaste = (e) => {
        if(e.clipboardData.types[0] === "text/html") {
            // const containerWidth = containerRef.current.clientWidth-20+"px";

            let image = (e.clipboardData || window.clipboardData).getData("text/html");
            //searching img tag
            image = image.match(/<img.*?src="(.*?)"[^\>]+>/g);

            //conver string to node
            let temp = document.createElement('div');
            temp.innerHTML= image[0];
            image = temp.firstChild;
            image.style.setProperty("max-width",'100%');
            // image.style.setProperty("height",containerWidth);

            // //create wrapper for im
            // const wrapperDiv = document.createElement("div");
            // // wrapperDiv.style.setProperty("width",containerWidth);
            // // wrapperDiv.style.setProperty("height",containerWidth);
            // wrapperDiv.style.setProperty("display","inline-block");
            // wrapperDiv.style.setProperty("border","4px solid red");
            // wrapperDiv.appendChild(image);

            //insert in correct place
            const selection = window.getSelection();
            if (!selection.rangeCount) return false;
            selection.deleteFromDocument();
            selection.getRangeAt(0).insertNode(image);

            e.preventDefault();
        }
    };
    const handleTemp = e => {
        setTemp(e.target.innerHTML);
    };
    const handleBlur = () => {
        dispatch(setDesc(temp));
    };
    useEffect(() => {
        setTemp(text);
    },[text]);
    return(
        <>
            {edit ? (
                <Container ref={containerRef} contentEditable="true" spellCheck="false" onClick={handleMove} onPaste={handlePaste} texttransform={textTransform} font={font}
                           textsize={textSize} textcolor={textColor} textbg={textBg} aligndesc={alignDesc} value={temp}
                           onBlur={handleBlur} onInput={handleTemp}/>
            ):(
                <Container ref={containerRef} contentEditable="true" spellCheck="false" onClick={handleMove} onPaste={handlePaste} texttransform={textTransform} font={font}
                           textsize={textSize} textcolor={textColor} textbg={textBg} aligndesc={alignDesc}
                           value={temp} onBlur={handleBlur} onInput={handleTemp}/>
            )}
        </>
        )
};
export default InputDesc