import React from 'react';

import { Container, Content } from './styles';
import MailCard from '../../components/MailCard';
import Header from '../../components/Header';

const Mail: React.FC = () => (
  <Container>
    <Header />
    <Content>
      <MailCard />
    </Content>
  </Container>
);

export default Mail;
