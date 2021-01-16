import React from 'react';
import styled from 'styled-components'

const Link = styled.a`
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 1.5rem;
  text-decoration: underline;
  color: #F9B613;
`;
const AuthorsLink = () => {
    return (
        <Link href="https://notes-sage.vercel.app/authors">Authors</Link>
    );
};

export default AuthorsLink;