import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled.div`
  display: none;
  @media (min-width: 768px) {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  }
`;
const Linkk = styled(Link)`
  
`;
const Btn = styled.button`
  border: 2px solid #F9B613;
  width: 45px;
  height: 45px;
  cursor: pointer;
  background: none;
  padding: 10px;
  position: relative;
  border-radius: 50%;
`;
const Svg = styled.svg`
  color: #F9B613;
`;
const Nav = () => {
    return (
        <Container>
            <Linkk to="/add">
                <Btn>
                    <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></Svg>
                </Btn>
            </Linkk>
            <Linkk to="/dashboard">
                <Btn>
                    <Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="sticky-note" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z"></path></Svg>
                </Btn>
            </Linkk>
            <Linkk to="/logout">
                <Btn>
                    <Svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></Svg>
                </Btn>
            </Linkk>
        </Container>
    );
};

export default Nav;