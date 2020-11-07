import React from 'react';
import styled from 'styled-components'
import Note from "./note/Note";
import { useSelector} from "react-redux";
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    600: 1
};

const Container = styled(Masonry)`
  display: flex;
  width: auto;
  margin: 0 20px;
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
            <Container  breakpointCols={breakpointColumnsObj}>
                {data.map((el,i) => <Note key={i} title={el.title} text={el.text} titleColor={el.titleColor} titleBg={el.titleBg} textColor={el.textColor} textBg={el.textBg} border={el.border} font={el.font} textSize={el.textSize} titleSize={el.titleSize} num={el.num}/>)}
            </Container>
        </>
    );
};

export default AllNotes;