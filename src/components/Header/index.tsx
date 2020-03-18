import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/logo.png';

const Header: React.FC = () => (
  <Container>
    <Link to="/">
      <img src={logo} alt="Mock" width="100" height="110" />
    </Link>
    <Link to="/">
      <GoMarkGithub size="30" />
    </Link>
  </Container>
);

export default Header;
