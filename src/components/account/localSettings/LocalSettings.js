import React, {useEffect, useRef} from 'react';
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
display: flex;
background: transparent;
color: #F9B613;
flex-direction: column;
align-items: center;
`;
const Element = styled.div`
  display: ${props => props.mobile ? 'none' : 'flex'};
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 3px;
  border-bottom: 1px solid #F9B613 ;
  @media(min-width: 768px){
     width: 25%;
  }
`;
const P = styled.p`
  font-size: 1.4rem;
  width: 50%;
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
  border: 2px solid #F9B613;
  background-color: #E8E9E3;
  border-radius: 50%;
  font-size: 1.4rem;
  width: 25px;
  height: 25px;
  text-align: center;
  position: relative;
  cursor: pointer;
`;
const Info = styled.div`
  display: none;
  opacity: 0;
  position: absolute;
  top: 101%;
  right: 0;
  width: 250px;
  padding: 10px 5px;
  text-align: right;
  background-color: #E9EAE4;
  border-radius: 12px;
  border: 2px solid #F9B613;
  font-size: 1rem;
  transition: opacity 0.5s ease;
  z-index: 15;
  ${More}:hover &{
    display: block;
    opacity: 1;
  }
`;
const LocalSettings = () => {
    const autosave = useRef(null);
    const deletealert = useRef(null);
    const selecttext = useRef(null);
    const selectprivate = useRef(null);
    const darkmode = useRef(null);

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
        if(localStorage.getItem('darkmode') !== null){
            darkmode.current.checked = true;
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
        if(selectprivate.current.checked === true){
            localStorage.setItem('statusnote','true');
        }else{
            localStorage.removeItem('statusnote');
        }
    };

    const handleDarkMode = () => {
        if(darkmode.current.checked === true){
            localStorage.setItem('darkmode','true');
        }else{
            localStorage.removeItem('darkmode');
        }
        window.location.reload();

    };

    return (
        <Container>
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
            <Element>
                <P>Dark mode</P>
                <Label>
                    <Input type="checkbox" onClick={handleDarkMode} ref={darkmode} />
                    <Span></Span>
                </Label>
                <More>?
                    <Info>On/off dark mode.</Info>
                </More>
            </Element>
        </Container>
    );
};

export default LocalSettings;