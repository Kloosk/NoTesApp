import React from 'react';
import styled from 'styled-components'
import Note from "./note/Note";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../../redux/auth/authActions";

const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;
const Welcome = styled.h1`
  margin: 12vh 0 0 0;
  text-align: center;
  font-size: 2rem;
  color: #F9B613;
`;
const AllNotes = ({data}) => {
    const name = useSelector(state => state.auth.user.name);

    return (
        <Container>
            <Welcome>Hello {name}</Welcome>
            {data.map(el => <Note/>)}
        </Container>
    );
};

export default AllNotes;