import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import None from "./none/None";
import Logo from "../logo/Logo";
import AllNotes from "./allNotes/allNotes";
import Menu from "../navMobile/Menu";
import {dashClose, menuDesktopClose, setSentence, setShow} from "../../redux";
import Nav from "../nav/Nav";
import AlertDelete from "../alertDelete/AlertDelete";
import Loading from "../loading/Loading";
import bg from "../../img/bgReg.webp"
import useNotes from "../../hooks/useNotes";

const Container = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Grandstander&display=swap');
  min-height: 100vh;
  overflow-x: hidden;
  background-image: ${props => props.darkmode ? "none" : `url(${bg})`};
  background-color: ${props => props.darkmode && `#231f20`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  user-select: ${props => props.select ? 'none' : 'auto'};
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
    const {data,status} = useNotes();
    const {alert} = useSelector(state => state.alert);
    const [select,setSelect] = useState(false);
    const [darkmode,setDarkmode] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSentence(""));
        localStorage.getItem('selecttext') !== null && setSelect(true);
        localStorage.getItem('darkmode') !== null && setDarkmode(true);
    },[]);// eslint-disable-line react-hooks/exhaustive-deps

    const closeMenu = () => {
        dispatch(dashClose());
        dispatch(menuDesktopClose());
        dispatch(setShow(false));
    };
    return (
        <>
        {status === "success" && (
            <>
                <Logo path="/dashboard"/>
                <AlertDelete/>
                <Nav num={2}/>
                <Menu num={2}/>
                <Container onClick={closeMenu} select={select} darkmode={darkmode}>
                    {data.length > 0 ? <AllNotes data={data}/> : <None/>}
                </Container>
                <Overlay alert={alert}/>

            </>
       )}
       {status === "loading" && <Loading/>}
       {status === "error" && <h1>Error with fetching data</h1>}
      </>
    );
};

export default Dashboard;