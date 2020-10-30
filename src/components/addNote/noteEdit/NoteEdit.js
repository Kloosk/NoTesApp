import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import randomNote from "../data/randomNote";
import InputTitle from "./inputTitle/InputTitle";
import InputDesc from "./inputDesc/InputDesc";

const Container = styled.div`
  width: 80vw;
  min-height: 200px;
  border: 2px solid ${props => props.border};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: auto;
  }
`;
const NoteEdit = () => {
    const [randomData,setRandomData] = useState({});
    useEffect(() => {
        setRandomData(randomNote());
    },[]);
    if(randomData) {
        const {title,text,titleColor,titleBg,textColor,textBg,border,font,textSize,titleSize} = randomData;
        return (
            <Container border={border}>
                <InputTitle/>
                <InputDesc/>
            </Container>
        );
    }else return null

};

export default NoteEdit;