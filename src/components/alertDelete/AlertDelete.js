import React, {useRef} from 'react';
import styled from 'styled-components'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {alertOff} from "../../redux";

const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 200px;
  border: 4px solid #BF0413;
  background: #F2B705;
  color: #000;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: ${props => props.alert ? 'flex' : 'none'};
`;
const H1 = styled.h1`
  font-family: Lato;
  font-size: 1rem;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
`;
const P = styled.p`
  font-size: 1rem;
`;
const Btn = styled.button`
  padding: 7px 14px;
  border: 2px solid #BF0413;
  color: #000;
  &:hover{
    background: #F2B705;
  }
   @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  font-size: 1rem;
  cursor: pointer;
  margin: 0 20px;
`;
const Input = styled.input`
  margin-left: 10px;
  width: 20px;
  height: 20px;
`;

const AlertDelete = () => {
    const dispatch = useDispatch();
    const check = useRef(null);
    const {id,alert} = useSelector(state => state.alert);
    const decisionYes = () => {
        axios.post("https://notesappserver.herokuapp.com/api/users/delete", {num: id},{headers: {'auth-token': localStorage.getItem("jwtToken")}})
            .then(res => {
                if(check.current.checked){
                   localStorage.setItem('alertdelete', 'true');
                }
                dispatch(alertOff());
                window.location.reload();
            })
            .catch(err => console.log(err));

    };
    const decisionNo = () => {
        dispatch(alertOff());
    };
    return (
        <Container alert={alert}>
            <H1>Are you sure you want delete note?</H1>
            <H1>This decision will be irreversible.</H1>
            <Flex>
                <Btn onClick={decisionYes}>Yes</Btn>
                <Btn onClick={decisionNo}>No</Btn>
            </Flex>
            <Flex>
                <P>Remember my decision.</P>
                <Input type="checkbox" ref={check}/>
            </Flex>
        </Container>
    );
};

export default AlertDelete;