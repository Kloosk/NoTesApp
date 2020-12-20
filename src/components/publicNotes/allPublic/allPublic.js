import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Masonry from 'react-masonry-css';
import Loading from "../../loading/Loading";
import NotePublic from "../notePublic/NotePublic";

const Container = styled(Masonry)`
  display: flex;
  width: auto;
  margin: 0 13px;
`;
const AllPublic= ({data}) => {
    const [width,setWidth] = useState(null);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize",() => {
          setWidth(window.innerWidth);
        });
    },[]);
    return(
        <>
            {width > 992 &&(
                <Container breakpointCols={{default: 3}} columnClassName="">
                    {data.map((el, i) => <NotePublic key={i} title={el.title} text={el.text} titleTransform={el.titleTransform} textTransform={el.textTransform} titleColor={el.titleColor}
                                                     titleBg={el.titleBg} textColor={el.textColor} textBg={el.textBg}
                                                     border={el.border} font={el.font} textSize={el.textSize}
                                                     titleSize={el.titleSize} name={el.name}/>)}
                </Container>
            )}
            {(width > 768 && width <= 992) &&(
                <Container breakpointCols={{default: 2}} columnClassName="">
                    {data.map((el, i) => <NotePublic key={i} title={el.title} text={el.text} titleColor={el.titleColor}
                                                     titleTransform={el.titleTransform} textTransform={el.textTransform}
                                                     titleBg={el.titleBg} textColor={el.textColor} textBg={el.textBg}
                                                     border={el.border} font={el.font} textSize={el.textSize}
                                                     titleSize={el.titleSize} name={el.name}/>)}
                </Container>
            )}
            {width <= 768 &&(
                <Container breakpointCols={{default: 1}} columnClassName="">
                    {data.map((el, i) => <NotePublic key={i} title={el.title} text={el.text} titleColor={el.titleColor}
                                                     titleTransform={el.titleTransform} textTransform={el.textTransform}
                                                     titleBg={el.titleBg} textColor={el.textColor} textBg={el.textBg}
                                                     border={el.border} font={el.font} textSize={el.textSize}
                                                     titleSize={el.titleSize} name={el.name}/>)}
                </Container>
            )}

        </>
    );
};

export default AllPublic;