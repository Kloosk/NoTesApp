import React from 'react';
import Picker from 'emoji-picker-react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {setDesc} from "../../redux";

const Container = styled.div`
  position: absolute;
  top: 0;
  display: ${props => props.show ? 'block' : 'none'};
`;
const Emoji = () => {
    const dispatch = useDispatch();
    const obj = useSelector(state => state.note.text);
    const show = useSelector(state => state.emoji.open);
    const onEmojiClick = (event, emojiObject) => {
        dispatch(setDesc(obj + emojiObject.emoji));
    };
    return (
        <Container show={show}>
            <Picker onEmojiClick={onEmojiClick} />
        </Container>
    );
};

export default Emoji;