import React, {useEffect, useRef} from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";

const Container = styled.div`
 display: flex;
 position: static;
z-index: 20;
width: 100%;
background-color: #fff;
color: #F9B613;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 10px;
  @media(min-width: 768px){
      z-index: 20;
      display: ${props => props.open ? 'flex' : 'none'};
      width: 250px;
      position: absolute;
      top: 55px;
      right: 5px;
      border-radius: 14px;
      border: 4px solid #F9B613; 
      background-color: #fff;
      color: #F9B613;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 10px;
  }
  
`;
const Element = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 3px;
  border-bottom: 1px solid #F9B613 ;
`;
const P = styled.p`
  font-size: 1.4rem;
`;
const Input = styled.input`
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;
const MenuDesktop = () => {
    // const autosave = useRef(null);
    const deletealert = useRef(null);
    const selecttext = useRef(null);

    const open = useSelector(state => state.menudesktop.open);

    useEffect(() => {
        // if(localStorage.getItem('autosave') !== null){
        //     autosave.current.checked = true;
        // }
        if(localStorage.getItem('alertdelete') !== null){
            deletealert.current.checked = true;
        }
        if(localStorage.getItem('selecttext') !== null){
            selecttext.current.checked = true;
        }
    },[]);

    const handleDeleteAlert = () => {
        if(deletealert.current.checked === true){
            localStorage.setItem('alertdelete','true')
        }else{
            localStorage.removeItem('alertdelete');
        }
    };

    // const handleAutosave = () => {
    //     if(autosave.current.checked === true){
    //         localStorage.setItem('autosave','true')
    //     }else{
    //         localStorage.removeItem('autosave');
    //     }
    // };

    const handleSelectText = () => {
        if(selecttext.current.checked === true){
            localStorage.setItem('selecttext','true');
            window.location.reload();
        }else{
            localStorage.removeItem('selecttext');
            window.location.reload();
        }
    };

    return (
        <Container open={open}>
            <Element>
                <P>Delete alert</P>
                <Input onClick={handleDeleteAlert} ref={deletealert} type="checkbox"/>
            </Element>
            {/*<Element>*/}
            {/*    <P>Autosave</P>*/}
            {/*    <Input onClick={handleAutosave} ref={autosave} type="checkbox"/>*/}
            {/*</Element>*/}
            <Element>
                <P>Select text note</P>
                <Input onClick={handleSelectText} ref={selecttext} type="checkbox"/>
            </Element>
        </Container>
    );
};

export default MenuDesktop;