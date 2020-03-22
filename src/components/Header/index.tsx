import React, { useState, useContext, useEffect } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';
import lightLogo from '../../assets/lightLogo.svg';
import darkLogo from '../../assets/darkLogo.svg';
import { AppContext } from '../../App';

const Header: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);
  const { toggleTheme }: any = useContext(AppContext);
  const [logo, setLogo] = useState(darkLogo);

  useEffect(() => {
    setLogo(title === 'light' ? darkLogo : lightLogo);
  }, [title]);
  return (
    <Container>
      <a href=".">
        <img src={logo} alt="Mock" />
      </a>
      <div>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={30}
          handleDiameter={13}
          onColor="#666"
          offColor="#000"

        />
        <a href="https://github.com/Lucas-Fonte/Mock" target="_blank" rel="noopener noreferrer">
          <GoMarkGithub size="30" color={colors.text} />
        </a>
      </div>
    </Container>
  );
};


export default Header;
