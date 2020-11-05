import React from 'react';
import styled from 'styled-components'
import Btn from "./btn/Btn";
import SubMenu from "./submenu/SubMenu";

const Container = styled.nav`
  position: absolute;
  top: 12px;
  right: 5px;
  z-index: 3;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = ({num}) => {
    return (
        <Container>
            <Btn/>
            <SubMenu num={num}/>
        </Container>
    );
};

export default Menu;