import React, {useEffect, useRef} from 'react';
import styled from 'styled-components'
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
  padding: 15px 10px 40px 10px;
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
const Name = styled.p`
  font-family: Lato;
  position: absolute;
  bottom: 3px;
  right: 5px;
  font-size: 1.4rem;
  color: ${props => props.color};
`;
const NotePublic = ({title,text,titleColor,titleBg,textColor,textBg,border,borderSize,font,textSize,titleSize,titleTransform,textTransform,alignDesc,name}) => {
    const textRef = useRef(null);
    useEffect(() => {
        textRef.current.innerHTML = text;
    },[text]);
    return (
        <Container border={border} borderSize={borderSize}>
            <Title readOnly disabled spellCheck="false" font={font} titletransform={titleTransform} titlecolor={titleColor} titlebg={titleBg} titlesize={titleSize} defaultValue={title}/>
            <Desc ref={textRef} font={font} texttransform={textTransform} textsize={textSize} textcolor={textColor} textbg={textBg} aligndesc={alignDesc}/>
            <Name color={textColor}>{name}</Name>
        </Container>
    );
};

export default NotePublic;