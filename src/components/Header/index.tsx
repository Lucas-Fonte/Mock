import React, { useState } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { Container } from './styles';
// import lightLogo from '../../assets/lightLogo.svg';
import darkLogo from '../../assets/darkLogo.svg';

const Header: React.FC = () => {
  const [logo, setLogo] = useState(darkLogo);
  return (
    <Container>
      <a href=".">
        <img src={logo} alt="Mock" />
      </a>
      <a href="https://github.com/Lucas-Fonte/Mock" target="_blank" rel="noopener noreferrer">
        <GoMarkGithub size="30" color="#000" />
      </a>
    </Container>
  );
};


export default Header;
