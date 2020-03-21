import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <a href=".">
      <img src={logo} alt="Mock" />
    </a>
    <a href="https://github.com/Lucas-Fonte/Mock" target="_blank" rel="noopener noreferrer">
      <GoMarkGithub size="30" color="#000" />
    </a>
  </Container>
);

export default Header;
