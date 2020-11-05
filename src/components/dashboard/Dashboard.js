import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import None from "./none/None";
import Logo from "../logo/Logo";
import AllNotes from "./allNotes/allNotes";
import Menu from "../menu/Menu";
import {dashClose} from "../../redux";
import Nav from "../nav/Nav";
import AlertDelete from "../alertDelete/AlertDelete";

const Container = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Grandstander&display=swap');
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  background: #000;
  opacity: 0.8;
  overflow: hidden;
  display: ${props => props.alert ? 'block' : 'none'};
`;
const Dashboard = () => {
    const {alert} = useSelector(state => state.alert);
    const dispatch = useDispatch();
    const [data,setData] = useState([]);
    useEffect(() => {
        axios
            .get("/api/users/dashboard", {
                headers: {
                    'auth-token': localStorage.getItem("jwtToken")
                }})
            .then(res => setData(res.data.data))
            .catch(err => console.log(err));
    },[]);
    const closeMenu = () => {
        dispatch(dashClose());
    };
    return (
        <>
            <Logo/>
            <AlertDelete/>
            <Nav num={2}/>
            <Menu num={2}/>
            <Container onClick={closeMenu}>
                {data.length > 0 ? <AllNotes data={data}/> : <None/>}
            </Container>
            <Overlay alert={alert}/>
        </>
    );
};

export default Dashboard;