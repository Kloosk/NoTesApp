import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Note from "./note/Note";
import { useSelector} from "react-redux";
import Masonry from 'react-masonry-css';
import {searchEngine} from "../../search/SearchEngine";

const Container = styled(Masonry)`
  display: flex;
  width: auto;
  margin: 0 13px;
`;
const Welcome = styled.h1`
  width: 100%;
  margin-top: 12vh;
  text-align: center;
  font-size: 2.2rem;
  color: #F9B613;
`;
const AllNotes = ({data}) => {
    const name = useSelector(state => state.auth.user.name);//username
    const inputSentence = useSelector(state => state.inputSentence.sentence);//search input value
    const sortMethod = useSelector(state => state.sort.method); // method of sort true=newest or false=oldest
    const [searchData,setSearchData] = useState(data); //copy data to operation on display array
    const [width,setWidth] = useState(null);//width of windows
    useEffect(() => {//initial effect
        setWidth(window.innerWidth);
        window.addEventListener("resize",() => {
            setWidth(window.innerWidth);
        });
    },[]);

    useEffect(() => { //sort effect
        //statment for first time launch
        data !== searchData && setSearchData(searchData.reverse());//reverse data
    },[sortMethod]);

    useEffect(() => {//search effect
        setSearchData(searchEngine(data,inputSentence));//searching function
    },[inputSentence]);

    const bigFirstLetter = name => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };
    return(
        <>
            <Welcome>Hi {bigFirstLetter(name)}</Welcome>
            {width > 992 && (
                <Container breakpointCols={{default: 3}} columnClassName="">
                    {searchData.map(el => <Note key={el.num} title={el.title} text={el.text} titleTransform={el.titleTransform} textTransform={el.textTransform} titleColor={el.titleColor}
                                               titleBg={el.titleBg} textColor={el.textColor} textBg={el.textBg}
                                               border={el.border} font={el.font} textSize={el.textSize}
                                               titleSize={el.titleSize} num={el.num} borderSize={el.borderSize}/>)}
                </Container>
            )}
            {(width > 768 && width <= 992) && (
                <Container breakpointCols={{default: 2}} columnClassName="">
                    {searchData.map(el => <Note key={el.num} title={el.title} text={el.text} titleColor={el.titleColor}
                                               titleTransform={el.titleTransform} textTransform={el.textTransform}
                                               titleBg={el.titleBg} textColor={el.textColor} textBg={el.textBg}
                                               border={el.border} font={el.font} textSize={el.textSize}
                                               titleSize={el.titleSize} num={el.num} borderSize={el.borderSize}/>)}
                </Container>
            )}
            {width <= 768 && (
                <Container breakpointCols={{default: 1}} columnClassName="">
                    {searchData.map(el => <Note key={el.num} title={el.title} text={el.text} titleColor={el.titleColor}
                                               titleTransform={el.titleTransform} textTransform={el.textTransform}
                                               titleBg={el.titleBg} textColor={el.textColor} textBg={el.textBg}
                                               border={el.border} font={el.font} textSize={el.textSize}
                                               titleSize={el.titleSize} num={el.num} borderSize={el.borderSize}/>)}
                </Container>
            )}
        </>
    )
};
export default AllNotes;