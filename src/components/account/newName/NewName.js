import React, {useRef, useState} from 'react';
import styled from 'styled-components'
import Alert from "./Alert";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;  
  flex-direction: column;
`;
const H1 = styled.h1`
  font-size: 1.3rem;
  color: #F9B613;
  margin-bottom: 5px;
  @media (min-width: 768px) {
     margin-right: 6px;
  }
`;
const Input = styled.input`
  height: 25px;
  border: 1px solid #F9B613;
  border-radius: 14px;
  outline: none;
  padding: 0 4px;
  &:focus{
     border: 3px solid #F9B613;
  }
`;
const Btn = styled.button`
  cursor: pointer;
  height: 25px;
  padding: 0 5px;
  color: #F9B613;
  border: 1px solid #F9B613;
  border-radius: 14px;
  outline: none;
  &:hover{
     border: 3px solid #F9B613;
  }
`;
const Error = styled.div`
  color: red;
  padding: 2px 0;
  font-size: 1rem;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Inline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const NewName = () => {
    const inputRef = useRef(null);
    const [msg,setMsg] = useState("");
    const [show,setShow] = useState(false);
    const [errMsg,setErrMsg] = useState([]);
    const handleSaveName = () => {
      const inputValue = inputRef.current.value;
      const tempArrOfErr = [];
      if(inputValue.length > 20 || inputValue.length < 3){
          tempArrOfErr.push("Required length 3-20");
      }
      if(tempArrOfErr.length >= 1){
          setErrMsg(tempArrOfErr);
      }else{
          setErrMsg([]);
          //server axios
          //when response
          setMsg("Name update succesfully");
          setShow(true);
          setTimeout(() => {
              setShow(false);
          },3000);
      }
    };
    return (
        <Container>
            <Alert msg={msg} show={show}/>
            <Inline>
                <H1>New Name</H1>
                <Flex>
                    <Input ref={inputRef} type="text"/>
                    <Btn onClick={handleSaveName}>Save</Btn>
                </Flex>
            </Inline>
            {errMsg.map((el,i) => <Error key={i}>{el}</Error>)}
        </Container>
    );
};

export default NewName;