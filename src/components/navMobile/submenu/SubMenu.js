import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {dashClose} from "../../../redux";

const Container = styled.div`
  overflow: hidden;
  position: absolute;
  top: 103%;
  right: 0;
  width: 70vw;
  height: 50vh;
  border: ${props => props.darkmode ? `2px solid #F9B613` : `2px solid #000`};
  background-color: ${props => props.darkmode ? `#231f20` : `#E8EAE3`};
  z-index: 2;
  display: ${props => props.open ? 'block' : 'none'};
 @media (min-width: 768px) {
    width: 40vw;
  }
  @media (min-width: 992px){
   width: 25vw;
  }
  @media (min-width: 560px) 
  and (max-width: 800px)
  and (orientation: landscape) {
    height: auto;
    padding-bottom: 20px;
  }
`;
const Element = styled.button`
  border: none;
  border-bottom: 2px solid #F9B613;
  outline: none;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 7px 20px 7px 0;
  cursor: pointer;
  transition: transform 0.5s ease;
  :hover{
     transform: scale(1.1);
  }
`;
const P = styled.p`
  font-size: 1.5rem;
  margin-right: 20px;
  text-align: right;
  width: 60%;
  font-family: 'Lato';
  color: ${props => props.darkmode ? `#F9B613` : `#000`};
`;
const Svg = styled.svg`
  width: 20px;
  height: 20px;
  color: #F9B613;
`;
const Linkk = styled(Link)`
  text-decoration: none;
`;
const SubMenu = ({num}) => {
    const dispatch = useDispatch();
    const open = useSelector(state => state.dashmenu.open);
    const [darkmode,setDarkmode] = useState(false);
    useEffect(() => {
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);
    const handleClick = () => {
        dispatch(dashClose()); // close mobile menu
    };
    return (
        <Container open={open} darkmode={darkmode}>
            <Linkk to="/logout">
                <Element onClick={handleClick}>
                    <P darkmode={darkmode}>Logout</P>
                    <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></Svg>
                </Element>
            </Linkk>
            <Linkk to="/add" style={{display: num===1 && 'none'}}>
                <Element onClick={handleClick}>
                    <P darkmode={darkmode}>Add note</P>
                    <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></Svg>
                </Element>
            </Linkk>
            <Linkk to="/dashboard" style={{display: num===2 && 'none'}}>
                <Element onClick={handleClick}>
                    <P darkmode={darkmode}>MyNotes</P>
                    <Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="sticky-note" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z"></path></Svg>
                </Element>
            </Linkk>
            <Linkk to="/public" style={{display: num===3 && 'none'}}>
                <Element onClick={handleClick}>
                    <P darkmode={darkmode}>AllNotes</P>
                    <Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comments" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path></Svg>
                </Element>
            </Linkk>
            <Linkk to="/account" style={{display: num===4 && 'none'}}>
                <Element onClick={handleClick}>
                    <P darkmode={darkmode}>Account</P>
                    <Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></Svg>
                </Element>
            </Linkk>
        </Container>
    );
};

export default SubMenu;