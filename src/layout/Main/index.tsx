import React from 'react';

import { Container, Content } from './styles';
import Card from '../../components/Card';
import Header from '../../components/Header';

const Main: React.FC = () => (
  <Container>
    <Header />
    <Content>
      <Card />
    </Content>
  </Container>
);

export default Main;
