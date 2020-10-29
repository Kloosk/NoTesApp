import React from 'react';
import styled from 'styled-components'
import axios from "axios";

const Container = styled.button`

`;

const SendBtn = ({data}) => {
    const sendNote = () => {
        axios
            .post("/api/users/add", data,{
                headers: {
                    'auth-token': localStorage.getItem("jwtToken")
                }})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    return (
        <Container onClick={sendNote}>
            ADD
        </Container>
    );
};

export default SendBtn;