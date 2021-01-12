import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {setSentence, setShow} from "../../redux/searchInput/searchInputActions";

const Container = styled.div`
  position: relative;
  top: 3px;
  height: 40px;
  width: 220px;
  overflow: hidden;
  @media(min-width: 768px){
    position: relative;
    top: 0;
    right: 0;
    height: 50px;
    width: 350px;
  }
`;
const Btn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 50;
  width: 40px;
  height: 40px;
  border: 2px solid #F9B613;
  border-radius: 50%;
  background-color: ${props => props.darkmode ? "#231f20" : "#EBEBE7"};
  cursor: pointer;
  @media(min-width: 768px){
      width: 50px;
      height: 50px;
      padding: 10px;
  }
`;
const Svg = styled.svg`
  width: 20px;
  height: 20px;
  color: #F9B613;
`;
const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 40;
  border-radius: 25px;
  height: 40px;
  border: 2px solid #F9B613;
  color: ${props => props.darkmode ? "#F9B613" : "#000"};
  background-color: ${props => props.darkmode ? "#231f20" : "#EBEBE7"};
  padding: 0 40px 0 7px;
  font-size: 1.1rem;
  width: 220px;
  transition: transform 0.5s ease;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(220px)'};
  outline-color: ${props => props.darkmode && "#F9B613" };
  @media(min-width: 768px){
    height: 50px;
    width: 350px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(350px)'};

  }
`;
const Search = () => {
    const dispatch = useDispatch();
    const [darkmode,setDarkmode] = useState(false);
    const show = useSelector(state => state.inputSentence.show);//search input show value true/false

    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);
    const showSearchBar = () => {
        dispatch(setShow(!show));
    };
    const handleInput = e => {
        dispatch(setSentence(e.target.value));
    };

    return (
        <Container>
            <Btn onClick={showSearchBar} darkmode={darkmode}>
                <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></Svg>
            </Btn>
            <Input type="text" placeholder="Search..." onChange={handleInput} show={show} darkmode={darkmode}/>
        </Container>
    );
};

export default Search;