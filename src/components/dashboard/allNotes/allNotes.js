import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Note from "./note/Note";
import { useSelector} from "react-redux";
import Masonry from 'react-masonry-css';
import Loading from "../../loading/Loading";

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
    const [load,setLoad] = useState(false);
    const [width,setWidth] = useState(null);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize',() => {
           setWidth(window.innerWidth);
        });
        setLoad(true);
    },[]);
    if(load) {
        if (width > 992) {
            return (
                <>
                    <Welcome>Hi {name}</Welcome>
                    <Container breakpointCols={{default: 3}} columnClassName="">
                        {data.map((el, i) => <Note key={i} title={el.title} text={el.text} titleColor={el.titleColor}
                                                   titleBg={el.titleBg} textColor={el.textColor} textBg={el.textBg}
                                                   border={el.border} font={el.font} textSize={el.textSize}
                                                   titleSize={el.titleSize} num={el.num}/>)}
                    </Container>
                </>
            )
        } else if (width > 768) {
            return (
                <>
                    <Welcome>Hi {name}</Welcome>
                    <Container breakpointCols={{default: 2}} columnClassName="">
                        {data.map((el, i) => <Note key={i} title={el.title} text={el.text} titleColor={el.titleColor}
                                                   titleBg={el.titleBg} textColor={el.textColor} textBg={el.textBg}
                                                   border={el.border} font={el.font} textSize={el.textSize}
                                                   titleSize={el.titleSize} num={el.num}/>)}
                    </Container>
                </>
            )
        } else if (width <= 768) {
            return (
                <>
                    <Welcome>Hi {name}</Welcome>
                    <Container breakpointCols={{default: 1}} columnClassName="">
                        {data.map((el, i) => <Note key={i} title={el.title} text={el.text} titleColor={el.titleColor}
                                                   titleBg={el.titleBg} textColor={el.textColor} textBg={el.textBg}
                                                   border={el.border} font={el.font} textSize={el.textSize}
                                                   titleSize={el.titleSize} num={el.num}/>)}
                    </Container>
                </>
            )
        }
    }else return <Loading/>
};

export default AllNotes;