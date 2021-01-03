import React from 'react';
import styled from 'styled-components'
import Btn from "./btn/Btn";
import SubMenu from "./submenu/SubMenu";
import Search from "../search/Search";

const Container = styled.nav`
  position: absolute;
  top: 7px;
  right: 5px;
  z-index: 3;
  display: flex;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = ({num}) => {
    return (
        <Container>
            <Search/>
            <Btn/>
            <SubMenu num={num}/>
        </Container>
    );
};

export default Menu;