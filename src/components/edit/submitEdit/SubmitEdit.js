import React, {useRef} from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {loadingTrue} from "../../../redux";
import {useEditUpdate} from "../../../hooks/useEditUpdate";


const Container = styled.button`
  display: ${props => props.edit ? 'block' : 'none'};
  font-size: 1.2rem;
  padding: 7px 14px;
  background: transparent;
  border: 2px solid #F9B613;
  color: #F9B613;
  position: relative;
  width: 150px;
  cursor: pointer;
  overflow: hidden;
  margin: 3px auto;
  @media (min-width: 768px) {
    width: 205px;
 }
  :hover{
    transform: translateY(1px);
  }
`;
const SubmitEdit = ({edit}) => {
    const {mutate} = useEditUpdate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.note);
    const btnRef = useRef(null);
    const sendData = () => {
        btnRef.current.setAttribute("disabled","disabled");//btn is only once click to avoid multiple add
        dispatch(loadingTrue());
        mutate(data);
    };
    return (
        <Container ref={btnRef} edit={edit} onClick={sendData}>Done</Container>
    );
};

export default SubmitEdit;