import React, {useEffect, useRef} from 'react';
import styled from 'styled-components'
import {useSelector} from "react-redux";

const Container = styled.div`
 display: flex;
 position: static;
z-index: 20;
width: 100%;
background-color: #E8EAE3;
color: #F9B613;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 10px;
  @media(min-width: 768px){
      z-index: 20;
      display: ${props => props.open ? 'flex' : 'none'};
      width:300px;
      position: absolute;
      top: 55px;
      right: 5px;
      border-radius: 14px;
      border: 4px solid #F9B613; 
      background-color: #E8EAE3;
      color: #F9B613;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 10px;
  }
  
`;
const Element = styled.div`
  display: ${props => props.mobile ? 'none' : 'flex'};
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
const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  @media(min-width: 768px){
     width: 60px;
     height: 34px;
  }
`;
const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #af4c4c;
  transition: .3s;
  border-radius: 34px;
  &::before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 0;
  background-color: #fff;
  transition: .3s;
  border-radius: 50%;
  }
  @media(min-width: 768px){
   &::before {
    height: 26px;
    width: 26px;
    bottom: 4px;
    }
  }
`;
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Span}{
    background-color: #4caf50;
  }
  &:checked + ${Span}:before {
  transform: translateX(14px);
  }
  @media(min-width: 768px){
    &:checked + ${Span}:before {
    transform: translateX(26px);
  }
  }
  
`;
const More = styled.div`
  border: 2px solid #000;
  background-color: #E8E9E3;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  font-size: 1rem;
  position: relative;
`;
const Info = styled.div`
  display: none;
  opacity: 0;
  position: absolute;
  top: 101%;
  right: 0;
  padding: 2px 5px;
  font-size: 1rem;
  transition: opacity 0.5s ease;
  ${More}:hover{
    display: block;
    opacity: 1;
  }
`;
const MenuDesktop = () => {
    const autosave = useRef(null);
    const deletealert = useRef(null);
    const selecttext = useRef(null);
    const selectprivate = useRef(null);

    const open = useSelector(state => state.menudesktop.open);

    useEffect(() => {
        if(localStorage.getItem('autosave') !== null){
            autosave.current.checked = true;
        }
        if(localStorage.getItem('alertdelete') !== null){
            deletealert.current.checked = true;
        }
        if(localStorage.getItem('selecttext') !== null){
            selecttext.current.checked = true;
        }
        if(localStorage.getItem('statusnote') !== null){
            selectprivate.current.checked = true;
        }
    },[]);

    const handleDeleteAlert = () => {
        if(deletealert.current.checked === true){
            localStorage.setItem('alertdelete','true');
        }else{
            localStorage.removeItem('alertdelete');
        }
    };

    const handleAutosave = () => {
        if(autosave.current.checked === true){
            localStorage.setItem('autosave','true')
        }else{
            localStorage.removeItem('autosave');
        }
    };

    const handleSelectText = () => {
        if(selecttext.current.checked === true){
            localStorage.setItem('selecttext','true');
        }else{
            localStorage.removeItem('selecttext');
        }
    };

    const handleSelectPrivate = () => {
        if(selecttext.current.checked === true){
            localStorage.setItem('statusnote','true');
        }else{
            localStorage.removeItem('statusnote');
        }
    };

    return (
        <Container open={open}>
            <Element>
                <P>Delete alert</P>
                <Label>
                        <Input type="checkbox" onClick={handleDeleteAlert} ref={deletealert}/>
                        <Span></Span>
                </Label>
                <More>?
                    <Info>Show/hide delete alert.</Info>
                </More>
            </Element>
            <Element>
                <P>Autosave</P>
                <Label>
                    <Input type="checkbox" onClick={handleAutosave} ref={autosave} />
                    <Span></Span>
                </Label>
                <More>?
                    <Info>Save your note automatically after making changes.</Info>
                </More>
            </Element>
            <Element>
                <P>Select text note</P>
                <Label>
                    <Input type="checkbox" onClick={handleSelectText} ref={selecttext} />
                    <Span></Span>
                </Label>
                <More>?
                    <Info>On/off text selection in your notes.</Info>
                </More>
            </Element>
            <Element>
                <P>Private</P>
                <Label>
                    <Input type="checkbox" onClick={handleSelectPrivate} ref={selectprivate} />
                    <Span></Span>
                </Label>
                <More>?
                    <Info>Disabling it keeps your notes always public.</Info>
                </More>
            </Element>
        </Container>
    );
};

export default MenuDesktop;