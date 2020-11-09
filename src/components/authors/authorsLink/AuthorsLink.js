import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Container = styled(Link)`
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 1.5rem;
  text-decoration: underline;
  color: #F9B613;
`;
const AuthorsLink = () => {
    return (
        <Container to="/authors">Authors</Container>
    );
};

export default AuthorsLink;