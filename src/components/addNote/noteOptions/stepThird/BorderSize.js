import React from 'react';
import styled from 'styled-components'
import {setBorderSize} from "../../../../redux";
import {useDispatch, useSelector} from "react-redux";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;
const BtnSize = styled.button`
  border: 2px solid #F9B613;
  background: transparent;
  color: #F9B613;
  font-size: 1.2rem;
  width: 30px;
  height: 25px;
  cursor: pointer;
  :hover{
    transform: translateY(1px);
  }
  @media (min-width: 768px) {
    width: 40px;
}
`;
const Num = styled.p`
  font-size: 1.7rem;
  color: #F9B613;
  margin: 0 5px;
`;
const BorderSize = () => {
    const dispatch = useDispatch();
    const borderSize  = useSelector(state => state.note.borderSize);

    const borderDec = () => {
        if(borderSize > 0) {
            dispatch(setBorderSize(-1));
        }
    };
    const borderInc = () => {
        if(borderSize < 15) {
            dispatch(setBorderSize(1));
        }

    };

    return (
        <Container>
            <BtnSize onClick={borderDec}>-</BtnSize>
            <Num>{borderSize}</Num>
            <BtnSize onClick={borderInc} >+</BtnSize>
        </Container>
    );
};

export default BorderSize;