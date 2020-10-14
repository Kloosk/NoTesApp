import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import {Link} from "react-router-dom";
import Logo from "../start/logo/Logo";
import Title from "./title/Title";

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
  width: 50vw;
`;
const Error = styled.p`
 color: red;
 font-size: 1rem;
 position: absolute;
 top: 102%;
`;
const Terms = styled.div`
  align-self: start;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin: 30px 0;
  position: relative;
`;
const Label = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
`;
const PInput = styled.p`
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
const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const Submit = styled.button`
  width: 50%;
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
`;
const Linkk = styled(Link)`
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #743ad5;
  color: #000;
`;
const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Logo/>
            <Container>
                <Title/>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>
                        <Input type="text" name="nick" aria-invalid={errors.nick ? "true" : "false"} ref={register({required: true,maxLength:20,minLength: 3})} />
                        <PInput>Name</PInput>
                        {errors.nick && errors.nick.type === "required" && <Error role="alert">This field is required</Error>}
                        {errors.nick && errors.nick.type === "minLength" && <Error role="alert">Min length 3</Error>}
                        {errors.nick && errors.nick.type === "maxLength" && <Error role="alert">Max length 20</Error>}
                    </Label>

                    <Label>
                        <Input type="text" name="password"  aria-invalid={errors.password ? "true" : "false"} ref={register({required: true,minLength: 6,maxLength: 20})} />
                        <PInput>Password</PInput>
                        {errors.password && errors.password.type === "required" && <Error role="alert">This field is required</Error>}
                        {errors.password && errors.password.type === "minLength" && <Error role="alert">Min length 6</Error>}
                        {errors.password && errors.password.type === "maxLength" && <Error role="alert" >Max length 20</Error>}
                    </Label>

                    <Label>
                        <Input type="text" name="confirmpassword"  aria-invalid={errors.confirmpassword ? "true" : "false"} ref={register({ validate: (value) => value === watch('password')})} />
                        <PInput>Confirm Password</PInput>
                        {errors.confirmpassword && <Error role="alert">Passwords are different</Error>}
                    </Label>

                    <Label>
                        <Input type="text" name="email"  aria-invalid={errors.email ? "true" : "false"} ref={register({required: true})} />
                        <PInput>Email</PInput>
                        {errors.email && <Error role="alert">This field is required</Error>}
                    </Label>

                    <Terms>
                        <Checkbox type="checkbox" name="terms" aria-invalid={errors.terms ? "true" : "false"} ref={register({required: true})}/>
                        <p>I accept the <Linkk to="/terms">terms and conditions</Linkk></p>
                        {errors.terms && <Error role="alert">Accept the terms and conditions</Error>}
                    </Terms>


                    <Submit>Submit</Submit>
                </Form>
            </Container>
            </>
    );
};

export default Register;