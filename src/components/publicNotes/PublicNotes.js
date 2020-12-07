import React, {useEffect,useState} from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {dashClose, menuDesktopClose} from "../../redux";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Nav from "../nav/Nav";
import bg from "../../img/bgReg.jpg";
import axios from "axios";
import AllPublic from "./allPublic/allPublic";
import Loading from "../loading/Loading";

const Div = styled.div`
  position: relative;
  overflow-x: hidden;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh; 
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
  padding-top: 13vh;
`;
const PublicNotes = () => {
    const dispatch = useDispatch();
    const [data,setData] = useState();
    const [load,setLoad] = useState(false);
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
                setLoad(true);
            })
            .catch(err => console.log(err));
    },[]);
    return (
        load ? <>
        <Div>
            <Logo/>
            <Menu num={3}/>
            <Nav num={3}/>
            <Container onClick={closeMenu}>
                {data.length > 0 && <AllPublic data={data}/>}
            </Container>
        </Div>
        </> : <Loading/>
    );
};

export default PublicNotes;