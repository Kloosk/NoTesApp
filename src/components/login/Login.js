import React, {useEffect} from 'react';
import styled from 'styled-components'
import Logo from "../logo/Logo";
import Title from "./title/Title";
import {useForm} from "react-hook-form";
import bgReg from "../../img/bgReg.jpg"
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/auth/authActions";
import LinkReg from "./link/LinkReg";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgReg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  @media (min-width: 768px) {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bgReg}) center/cover no-repeat;
  }
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
 font-size: 1.2rem;
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
  background: transparent;
  &:focus + ${PInput}::after{
    transform: skew(40deg) rotate(15deg) translate(0,50%);
  }
  &:focus{
    border-bottom: 2px solid #F9B613; 
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
 font-size: 1.2rem;
`;
const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const loginError = useSelector(state => state.auth.error);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    useEffect(() => {
        if (isAuthenticated) {
            history.push("/dashboard"); // push user to dashboard when they login
        }
    },[isAuthenticated]);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data =>{
        dispatch(loginUser(data));
    };
    return (
        isAuthenticated ? null : <>
            <Logo path="/"/>
            <LinkReg/>
            <Container>
                <Title/>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>
                        <Input type="text" id="email" name="email" aria-invalid={errors.email ? "true" : "false"} ref={register({required: true})} />
                        <PInput htmlFor="email"><PZindex>Email</PZindex></PInput>
                        {errors.nick && <Error role="alert">This field is required</Error>}
                    </Label>

                    <Label>
                        <Input type="password" id="pass" name="password"  aria-invalid={errors.password ? "true" : "false"} ref={register({required: true})}/>
                        <PInput htmlFor="pass"><PZindex>Password</PZindex></PInput>
                        {errors.password && <Error role="alert">This field is required</Error>}
                    </Label>
                    <Errors>
                        {loginError && <ErrorServer>{loginError.errors}</ErrorServer>}
                    </Errors>
                    <Submit><PZindex>Log In</PZindex></Submit>
                </Form>
            </Container>
        </>
    );
};

export default Login;