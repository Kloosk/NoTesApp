import React from 'react';
import styled from 'styled-components'
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const Container = styled.button`
  font-size: 1.2rem;
  margin: 3px 0;
  padding: 7px 14px;
  background: none;
  border: 2px solid #F9B613;
  color: #F9B613;
  position: relative;
  width: 150px;
  cursor: pointer;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 205px;
 }
  &::before{
    z-index: -1;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transition: transform 0.5s ease, opacity 0.5s ease;
    transform: translate(-50%,-50%) scaleX(0) skewX(4deg);
    opacity: 0;
    height: 100%;
    width: 10%;
    background-color: #0798DA;
  }
  &:hover::before{
    opacity: 1;
    transform: translate(-50%,-50%) scaleX(10) skewX(4deg);
  }
`;
const SendBtn = () => {
    const history = useHistory();
    const data = useSelector(state => state.note);
    const sendData = () => {
        axios.post("/api/users/add", data,{headers: {'auth-token': localStorage.getItem("jwtToken")}})
            .then(res => {
                localStorage.removeItem('noteSave');// delete own style note
                history.push("/dashboard");
            })
            .catch(err => console.log(err));
    };
    return (
        <Container onClick={sendData}>Add</Container>
    );
};

export default SendBtn;