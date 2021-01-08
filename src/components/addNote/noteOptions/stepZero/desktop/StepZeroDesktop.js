import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setTemplate} from "../../../../../redux";
import {genereateOne} from "../../../../../data/Data";
import SendBtn from "../../../sendBtn/SendBtn";
import SaveBtn from "../../../saveBtn/saveBtn";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  font-size: 1.2rem;
  margin: 3px 0;
  padding: 7px 14px;
  background: none;
  border: 2px solid #F9B613;
  color: #F9B613;
  position: relative;
  width: 100px;
  cursor: pointer;
  overflow: hidden;
  &:last-child{
    margin-left: 5px;
  }
  :hover{
    transform: translateY(1px);
  }
  @media (min-width: 768px) {
    display: ${props => props.show ? 'none' : 'block'};
 }
`;
const Linkk = styled(Link)`
  text-decoration: none;
`;
const StepZeroDesktop = () => {
    const dispatch = useDispatch();
    const handleGenerate = () => {
        dispatch(setTemplate(genereateOne()));
    };
    return (
        <Container>
            <Column>
                <Center>
                    <Button onClick={handleGenerate}>Random</Button>
                    <Linkk to="/touse"><Button>Use</Button></Linkk>
                </Center>
                <SendBtn/>
            </Column>
            <SaveBtn/>
        </Container>
    );
};

export default StepZeroDesktop;