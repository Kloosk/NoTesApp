import React from 'react';
import styled from 'styled-components'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../redux/auth/authActions";
import {Link,useHistory} from "react-router-dom";
const Container = styled.div`

`;
const Dashboard = () => {
    const history = useHistory();
    axios.get('/api/users/dashboard')
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    console.log(user);
    const logout = () => {
        dispatch(logoutUser());
        history.push("/logout");
    };
    return (
        <Container>
            Hi
            <button onClick={logout}>LOGOUT</button>
        </Container>
    );
};

export default Dashboard;