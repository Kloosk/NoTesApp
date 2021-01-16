import React from 'react';
import styled from 'styled-components'

const Container = styled.footer`
  position: absolute;
  bottom: 2px;
  left: 5px;
  display: flex;
`;
const Link = styled.a`
  font-size: 1.1rem;
  text-decoration: none;
  margin-right: 5px;
  color: #F9B613;
  :hover{
    text-decoration: underline;
  }
`;
const P = styled.p`
  font-size: 1.1rem;
  color: #F9B613;
`;
const Footer = () => {
    return (
        <Container>
            <Link href="https://notes-sage.vercel.app/authors">Authors |</Link>
            <Link href="https://notes-sage.vercel.app/terms"> Terms |</Link>
            <P> Notes &copy; 2021</P>
        </Container>
    );
};

export default Footer;