import React from 'react';
import styled from 'styled-components'
import Btn from "./Btn/Btn";
import SubMenu from "./submenu/SubMenu";

const Container = styled.nav`
  position: absolute;
  top: 12px;
  right: 5px;
  z-index: 3;
`;

const Menu = () => {
    return (
        <Container>
            <Btn/>
            <SubMenu/>
        </Container>
    );
};

export default Menu;