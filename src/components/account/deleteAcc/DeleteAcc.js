import React, {useState} from 'react';
import styled from 'styled-components'

const Btn = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   background: #E8E9E3;
   padding: 7px 14px;
   border: 2px solid red;
   cursor: pointer;

`;
const P = styled.p`
  font-size: 1.2rem;
  color: red;
  ${Btn}:hover &{
    transform: translateY(1px);
  }
  
`;
const Svg = styled.svg`
  margin-left: 10px;
  color: red;
  width: 20px;
  height: 20px;
  ${Btn}:hover &{
    transform: translateY(1px);
  }
`;
const Alert = styled.div`
  display: ${props => props.alert ? 'block' : 'none'};
  z-index: 998;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.8;
  background: #333;
`;
const Window = styled.div`
  display: ${props => props.alert ? 'flex' : 'none'};
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7px 14px;
  border: 4px solid #BF0413;
  background: #F2B705;
  width: 80%;
  @media (min-width: 768px) {
    width: 400px;
    height: 200px;
  }
`;
const Msg = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #000;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
const BtnMsg = styled.button`
  padding: 7px 14px;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 10px;
  border: 2px solid #BF0413;
  color: #000;
  &:hover{
    background: #F2B705;
  }
   @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
  @media (min-width: 768px) {
    margin-top: 15px;
  }
`;
const DeleteAcc = () => {
    const [alert,setAlert] = useState(false);
    const handleClick = () => {
            setAlert(true);
    };
    const handleYes = () => {

    };
    const handleNo = () => {
      setAlert(false);
    };
    return (
        <>
            <Alert alert={alert}/>
            <Window alert={alert}>
                <Msg>Are you sure you want to delete your account? This operation will be irreversible.</Msg>
                <Flex>
                    <BtnMsg onClick={handleYes}>Yes</BtnMsg>
                    <BtnMsg onClick={handleNo}>No</BtnMsg>
                </Flex>
            </Window>

            <Btn onClick={handleClick}>
                <P>Delete account</P>
                <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></Svg>
            </Btn>
        </>
    );
};

export default DeleteAcc;