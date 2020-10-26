import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../redux/auth/authActions";

const Logout = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logoutUser());
        history.push("/login");
    },[]);
    return (
        <div>
            Wylogowany zostałeś
        </div>
    );
};

export default Logout;