import React from 'react';
import Picker from 'emoji-picker-react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {setDesc, setTitle} from "../../redux";

const Container = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  top: 101%;
  left: 0;
  z-index: 100;
`;

const Emoji = () => {
    const dispatch = useDispatch();
    const {title,text} = useSelector(state => state.note);
    const show = useSelector(state => state.emoji.open);
    const emojiFocus = useSelector(state => state.emojiFocus.focus);
    const onEmojiClick = (event, emojiObject) => {
        if(emojiFocus){//if title===focus emoji for title
            dispatch(setTitle(title + emojiObject.emoji));
            return
        }
        dispatch(setDesc(text + emojiObject.emoji));
    };
    return (
        <Container show={show}>
            <Picker onEmojiClick={onEmojiClick}/>
        </Container>
    );
};

export default Emoji;