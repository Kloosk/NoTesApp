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
    },[]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            You have been logged out.
        </div>
    );
};

export default Logout;