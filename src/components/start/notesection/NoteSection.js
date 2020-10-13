import React from 'react';
import styled from 'styled-components'
import {DataNotes} from "./data/DataNotes";
import Note from "./note/Note";

const Container = styled.section`
  position: absolute;
  top: 65%;
  left: 50%;
  transform:  translateX(-50%);
  width: 90%;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  align-items: center;
  justify-items: center;
  overflow: hidden;
  @media (min-width: 768px) {
   grid-template-columns: repeat(2,1fr);
   grid-gap: 5vw;
  }
  @media (min-width: 992px){
   grid-gap: 5vw;
   grid-template-columns: repeat(4,1fr);
  }
`;
const NoteSection = () => {
    return (
        <Container>
            {DataNotes.map((el,i) => <Note key={i} border={el.border} bgColor={el.bgColor} font={el.font} bgTitle={el.bgTitle} color={el.color} descTxt={el.descTxt} titleTxt={el.titleTxt}/>)}
        </Container>
    );
};

export default NoteSection;