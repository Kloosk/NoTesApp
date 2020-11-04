import React from 'react';
import styled from 'styled-components'
import Note from "./note/Note";
import { useSelector} from "react-redux";

const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  @media (min-width: 768px) {
   align-items: start;
   padding: 0 5vw;
   grid-gap: 5vw;
   grid-template-columns: repeat(2,1fr);
  }
  @media (min-width: 992px){
   align-items: start;
   padding: 0 5vw;
   grid-gap: 5vw;
   grid-template-columns: repeat(3,1fr);
  }
`;
const Welcome = styled.h1`
  margin: 13vh 0 5vh 0;
  text-align: center;
  font-size: 2.2rem;
  color: #F9B613;
`;
const AllNotes = ({data}) => {
    const name = useSelector(state => state.auth.user.name);
    return (
        <>
            <Welcome>Hi {name}</Welcome>
            <Container>
                {data.map((el,i) => <Note key={i} title={el.title} text={el.text} titleColor={el.titleColor} titleBg={el.titleBg} textColor={el.textColor} textBg={el.textBg} border={el.border} font={el.font} textSize={el.textSize} titleSize={el.titleSize} num={el.num}/>)}
            </Container>
        </>
    );
};

export default AllNotes;