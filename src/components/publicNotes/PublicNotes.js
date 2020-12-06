import React, {useEffect,useState} from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {dashClose, menuDesktopClose} from "../../redux";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Nav from "../nav/Nav";
import bg from "../../img/bgReg.jpg";
import axios from "axios";

const Div = styled.div`
  position: relative;
  overflow-x: hidden;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh; 
  padding-top: 13vh;
  width: 100vw;
  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    padding: 0;
  }
`;
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
const PublicNotes = () => {
    const dispatch = useDispatch();
    const [data,setData] = useState();
    const closeMenu = () => {
        dispatch(dashClose());
        dispatch(menuDesktopClose())
    };
    useEffect(() => {
        axios.get("https://notesappserver.herokuapp.com/api/users/publicnotes", {
                headers: {
                    'auth-token': localStorage.getItem("jwtToken")
                }})
            .then(res => {
                setData(res.data);
                console.log(res);
            })
            .catch(err => console.log(err));
    },[]);
    return (
        <Div>
            <Logo/>
            <Menu num={3}/>
            <Nav num={3}/>
            <div onClick={closeMenu}>
                <Container data={data}>

                </Container>
            </div>
        </Div>
    );
};

export default PublicNotes;