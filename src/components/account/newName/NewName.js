import React, {useRef, useState} from 'react';
import styled from 'styled-components'
import Alert from "./Alert";
import axios from "axios";
import {useHistory} from "react-router-dom";

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
  background-color: ${props => props.dark ? "#231f20" : "#FFF"};
  color: ${props => props.dark ? "#F9B613" : "#000"};
  border-radius: 14px;
  outline: none;
  padding: 0 4px;
  &:focus{
     border: 3px solid #F9B613;
  }
  @media (min-width: 768px) {
      width: 300px;
      height: 40px;
  }
`;
const Btn = styled.button`
  cursor: pointer;
  height: 25px;
  padding: 0 5px;
  color: #F9B613;
  border: 1px solid #F9B613;
  background-color: ${props => props.dark ? "#231f20" : "#FFF"};
  border-radius: 14px;
  outline: none;
  &:hover{
     border: 3px solid #F9B613;
  }
    @media (min-width: 768px) {
      width: 100px;
      height: 40px;
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
const NewName = ({dark}) => {
    const history = useHistory();
    const inputRef = useRef(null);
    const [msg,setMsg] = useState("");
    const [show,setShow] = useState(false);
    const [errMsg,setErrMsg] = useState([]);
    const handleSaveName = () => {
      const data = {
          name: inputRef.current.value
      };
      const tempArrOfErr = [];
      if(data.name.length > 20 || data.name.length < 3){
          tempArrOfErr.push("Required length 3-20");
      }
      if(tempArrOfErr.length >= 1){
          setErrMsg(tempArrOfErr);
      }else{
          axios.post("https://notesappserver.herokuapp.com/api/users/changename", data,{headers: {'auth-token': localStorage.getItem("jwtToken")}})
              .then(res => {
                  if(res.data.errors.length > 0){
                      setErrMsg(res.error);
                  }else{
                      setMsg("Name update succesfully. You will be logged out.");
                      setShow(true);
                      setErrMsg([]);
                      setTimeout(() => {
                          setShow(false);
                          history.push("/logout");
                      },3000);
                  }
              }).catch(err => console.log(err));
      }
    };
    return (
        <Container>
            <Alert msg={msg} show={show}/>
            <Inline>
                <H1>New name</H1>
                <Flex>
                    <Input ref={inputRef} type="text" dark={dark}/>
                    <Btn onClick={handleSaveName} dark={dark}>Save</Btn>
                </Flex>
            </Inline>
            {errMsg.map((el,i) => <Error key={i}>{el}</Error>)}
        </Container>
    );
};

export default NewName;