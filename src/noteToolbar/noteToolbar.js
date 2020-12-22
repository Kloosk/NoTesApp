import React from 'react';
import styled from 'styled-components'
import EmojiBtn from "../components/emoji/EmojiBtn";

const Container = styled.div`
  position: absolute;
  left: 1px;
  top: 15vh;
  width: 30px;
  padding: 1px;
  border: 2px solid #F9B613;
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    top: 35vh;
    width:45px;
    padding: 2px;
    z-index: 99;
  }
`;
const NoteToolbar = () => {
    return (
        <Container>
            <EmojiBtn/>
        </Container>
    );
};

export default NoteToolbar;