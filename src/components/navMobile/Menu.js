import React from 'react';
import styled from 'styled-components'
import Btn from "./btn/Btn";
import SubMenu from "./submenu/SubMenu";
import Search from "../search/Search";
import Sort from "../sort/Sort";

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
            {(num === 2 || num === 3) && <Search/> /*if its dashboard or publicnotes show search icon*/}
            {(num === 2 || num === 3) && <Sort/> /*if its dashboard or publicnotes show search icon*/}
            <Btn/>
            <SubMenu num={num}/>
        </Container>
    );
};

export default Menu;