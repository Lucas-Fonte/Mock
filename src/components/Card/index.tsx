import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './styles';
import Loading from '../Loading';
import { timeout } from '../../utils/tools/timeout';

const Card: React.FC = () => {
  const [message, setMessage] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      await timeout(1500);

      const response = await axios.get('/.netlify/functions/api/hello');
      const { data } = response;

      setMessage(data.msg);
      setNumber(data.number);
      setLoading(false);
    }

    loadData();
  }, []);
  return (
    <Container>
      {
      loading ? <Loading />
        : (
          <>
            <h2>{message}</h2>
            <h1>{number}</h1>
          </>
        )
      }
    </Container>
  );
};

export default Card;
