import React, {useState} from 'react';
import { useForm} from "react-hook-form";
import styled from 'styled-components'
import {Link,useHistory} from "react-router-dom";
import Logo from "../start/logo/Logo";
import Title from "./title/Title";
import bgReg from "../../img/bgReg.jpg"
import axios from 'axios'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bgReg}) center/cover no-repeat;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  @media (min-width: 768px) {
    width: 60vw;
  }
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
const PInput = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  height: 40px;
  padding: 5px;
  transition: opacity 0.8s ease;
  opacity: 1;
  overflow: hidden;
  &::after{
    content: "";
    position: absolute;
    bottom: 50%;
    right: 0;
    width: 100%;
    height: 50%;
    background-color: #F9B613;
    opacity: 0.4;
    z-index: 1;
    transition: transform 1s ease;
    transform: skew(40deg) rotate(15deg) translate(100%,50%);
  }
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
  transition: border 1s ease;
  background: transparent;
  &:focus + ${PInput}::after{
    transform: skew(40deg) rotate(15deg) translate(0,50%);
  }
  &:focus{
    border-bottom: 2px solid #F9B613; 
  }
`;
const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
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
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    z-index: 1;
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
const Linkk = styled(Link)`
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #F9B613;
  color: #F9B613;
`;
const PZindex = styled.p`
  position: relative;
  z-index: 5;
`;
const Errors = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
`;
const ErrorServer = styled.p`
 color: red;
 font-size: 1rem;
`;
const Register = () => {
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const [resErrors,setResErrors] = useState([]);
    const axiosPost = data =>{
      const promise = axios.post('http://localhost:5000/register', data);
      return promise.then(res => res.data);
    };
    const onSubmit = data =>{
        axiosPost(data)
            .then(res => {
                if(res.pass){
                    //pass
                    setResErrors([]);
                    history.push("/login");
                }else{
                    //return array of errors
                    setResErrors(res.errors);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <>
            <Logo/>
            <Container>
                <Title/>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>
                        <Input type="text" id="nick" name="name" aria-invalid={errors.name ? "true" : "false"} ref={register({required: true,maxLength:20,minLength: 3})} />
                        <PInput htmlFor="nick"><PZindex>Name</PZindex></PInput>
                        {errors.name && errors.name.type === "required" && <Error role="alert">This field is required</Error>}
                        {errors.name && errors.name.type === "minLength" && <Error role="alert">Min length 3</Error>}
                        {errors.name && errors.name.type === "maxLength" && <Error role="alert">Max length 20</Error>}
                    </Label>

                    <Label>
                        <Input type="password" id="pass" name="password"  aria-invalid={errors.password ? "true" : "false"} ref={register({required: true,minLength: 6,maxLength: 20})} />
                        <PInput htmlFor="pass" ><PZindex>Password</PZindex></PInput>
                        {errors.password && errors.password.type === "required" && <Error role="alert">This field is required</Error>}
                        {errors.password && errors.password.type === "minLength" && <Error role="alert">Min length 6</Error>}
                        {errors.password && errors.password.type === "maxLength" && <Error role="alert" >Max length 20</Error>}
                    </Label>

                    <Label>
                        <Input type="password" id="confirmpass" name="confirmpassword"  aria-invalid={errors.confirmpassword ? "true" : "false"} ref={register({ validate: (value) => value === watch('password')})} />
                        <PInput htmlFor="confirmpass"><PZindex>Confirm Password</PZindex></PInput>
                        {errors.confirmpassword && <Error role="alert">Passwords are different</Error>}
                    </Label>

                    <Label>
                        <Input type="text" id="email" name="email"  aria-invalid={errors.email ? "true" : "false"} ref={register({required: true})} />
                        <PInput htmlFor="email"><PZindex>Email</PZindex></PInput>
                        {errors.email && <Error role="alert">This field is required</Error>}
                    </Label>

                    <Terms>
                        <Checkbox type="checkbox" name="terms" aria-invalid={errors.terms ? "true" : "false"} ref={register({required: true})}/>
                        <p>I accept the <Linkk to="/terms">terms and conditions</Linkk></p>
                        {errors.terms && <Error role="alert">Accept the terms and conditions</Error>}
                    </Terms>

                    <Errors>
                        {resErrors && resErrors.map(err => <ErrorServer>{err.msg}</ErrorServer>)}
                    </Errors>
                    <Submit><PZindex>Submit</PZindex></Submit>
                </Form>
            </Container>
            </>
    );
};

export default Register;