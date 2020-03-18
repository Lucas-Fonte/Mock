import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './styles';

const Card: React.FC = () => {
  const [message, setMessage] = useState<string>();
  const [number, setNumber] = useState<number>();

  useEffect(() => {
    async function loadData() {
      const response = await axios.get('/.netlify/functions/hello');
      const { data } = response;

      setMessage(data.msg);
      setNumber(data.number);
    }

    loadData();
  }, []);
  return (
    <Container>
      <h2>{message}</h2>
      <h1>{number}</h1>
    </Container>
  );
};

export default Card;
