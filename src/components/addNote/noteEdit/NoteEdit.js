import React from 'react';
import styled from 'styled-components'
import InputTitle from "./inputTitle/InputTitle";
import InputDesc from "./inputDesc/InputDesc";
import {useSelector} from "react-redux";

const Container = styled.div`
  width: 80vw;
  min-height: 200px;
  border-style: solid;
  border-color: ${props => props.border};
  border-width: ${props => props.borderSize}px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 80%;
  }
`;
const NoteEdit = ({edit}) => {
    const {border,borderSize} = useSelector(state => state.note);
    return (
        <Container border={border} borderSize={borderSize}>
            <InputTitle edit={edit}/>
            <InputDesc edit={edit}/>
        </Container>
    );
};

export default NoteEdit;