import React, {useRef} from 'react';
import styled from 'styled-components'
import axios from "axios";
import {useDispatch} from "react-redux";
import {alertOn} from "../../../../redux";

const Container = styled.button`
  border: 2px solid #F9B613;
  width: 45px;
  height: 45px;
  cursor: pointer;
  padding: 10px;
  position: relative;
  background-color: #fff;
`;
const Svg = styled.svg`
  color: #F9B613;
  ${Container}:hover &{
    transform: scale(1.2);
  }
`;

const DeleteBtn = ({id}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        if(localStorage.getItem('alertdelete') === 'true'){
            axios.post("/api/users/delete", {num: id},{headers: {'auth-token': localStorage.getItem("jwtToken")}})
                .then(res => {
                   window.location.reload();
                })
                .catch(err => console.log(err));
        }else dispatch(alertOn(id));

    };
    return (
        <Container onClick={handleDelete}>
            <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></Svg>
        </Container>
    );
};

export default DeleteBtn;