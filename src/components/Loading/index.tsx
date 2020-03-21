import React from 'react';
import Lottie from 'react-lottie';
import { Container } from './styles';
import animationData from '../../assets/loading.json';

const Loading: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
      />
    </Container>
  );
};
export default Loading;
