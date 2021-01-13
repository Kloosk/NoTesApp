import React from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {setSort} from "../../redux";

const Btn = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid #F9B613;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  margin-top: 3px;
  outline: none;
  :hover::after{
    transform: translate(-75%,0);
    opacity: 1;
  }
  @media(min-width: 768px){
      position: static;
      width: 50px;
      height: 50px;
      padding: 10px;
      margin: 0;
      &::after{
        content: 'Sort';
        position: absolute;
        top: 70%;
        color: #F9B613;
        font-size: 1.2rem;
        transition: all .5s ease;
        transform: translate(-75%,-20px);
        opacity: 0;
  }
  }
`;
const Svg = styled.svg`
  width: 22px;
  height: 22px;
  color: #F9B613;
  ${Btn}:hover &{
    transform: scale(1.1);
  }
`;
const Sort = () => {
    const sortMethod = useSelector(state => state.sort.method);
    const dispatch = useDispatch();
    const handleSortMenu = () => {
        dispatch(setSort(!sortMethod));
    };
    return (
        <>
            <Btn onClick={handleSortMenu}>
                <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></Svg>
            </Btn>
        </>
    );
};

export default Sort;