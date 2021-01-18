import React from 'react';
import styled from 'styled-components'

const Container = styled.footer`
  position: fixed;
  bottom: 1px;
  left: 5px;
  display: flex;
  color: ${props => props.colordata ? "#F9B613" : "#000000"};
`;
const Link = styled.a`
  font-size: 1rem;
  text-decoration: none;
  margin-right: 5px;
  color: inherit;
  :hover{
    text-decoration: underline;
  }
`;
const P = styled.p`
  font-size: 1rem;
`;
const Footer = ({colordata}) => {
    return (
        <Container colordata={colordata}>
            <Link href="https://notes-sage.vercel.app/authors">Authors |</Link>
            <Link href="https://notes-sage.vercel.app/terms"> Terms |</Link>
            <P> Notes &copy; 2021</P>
        </Container>
    );
};

export default Footer;