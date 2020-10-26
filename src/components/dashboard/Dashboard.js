import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../redux/auth/authActions";
import {useHistory} from "react-router-dom";
import None from "./none/None";
import Logo from "../start/logo/Logo";
import AllNotes from "./allNotes/allNotes";
import Menu from "./menu/Menu";
import {dashClose} from "../../redux";

const Container = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Grandstander&display=swap');
  width: 100vw;
  min-height: 100vh;
`;

const Dashboard = () => {
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
            <Menu/>
            <Container onClick={closeMenu}>
                {data.length > 0 ? <AllNotes data={data}/> : <None/>}
            </Container>
        </>
    );
};

export default Dashboard;