import React from 'react';
import styled from 'styled-components'
import Logo from "../start/logo/Logo";
import Title from "./title/Title";
import {useForm} from "react-hook-form";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  @media (min-width: 768px) {
    padding: 40px;
    width: 60vw;
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(to left, #F9B613, #0798DA) 30;
  }
`;
const Error = styled.p`
 color: red;
 font-size: 1rem;
 position: absolute;
 top: 102%;
`;
const Label = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
`;
const PInput = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  width: 100%;
  height: 40px;
  padding: 5px 0 5px 5px;
  transition: opacity 0.8s ease;
  opacity: 1;
`;
const Input = styled.input`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 2px solid #000;
  outline: none;
  font-size: 1.2rem;
  padding-left: 5px;
  &:focus + ${PInput}{
    color: #743ad5;
  }
  &:focus{
    border-bottom: 2px solid #743ad5; 
  }
`;
const Submit = styled.button`
  width: 80%;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 7px 0;
  outline: none;
  color: #fff;
  border: none;
  border-radius: 3px;
  background: transparent;
  position: relative;
  overflow: hidden;
  margin-top: 15px;
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(to left, #F9B613, #0798DA);
    transition: transform 1s ease;
  }
  &:hover::after{
    transform: translateX(-50%);
  }
   @media (min-width: 768px) {
    width: 50%;
  }
`;
const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Logo/>
            <Container>
                <Title/>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>
                        <Input type="text" id="nick" name="nick" aria-invalid={errors.nick ? "true" : "false"} ref={register({required: true})} />
                        <PInput for="nick">Name</PInput>
                        {errors.nick && <Error role="alert">This field is required</Error>}
                    </Label>

                    <Label>
                        <Input type="text" id="pass" name="password"  aria-invalid={errors.password ? "true" : "false"} ref={register({required: true})}/>
                        <PInput for="pass">Password</PInput>
                        {errors.password && <Error role="alert">This field is required</Error>}
                    </Label>

                    <Submit>Log In</Submit>
                </Form>
            </Container>
        </>
    );
};

export default Login;