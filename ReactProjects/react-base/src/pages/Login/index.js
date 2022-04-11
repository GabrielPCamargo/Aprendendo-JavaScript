import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getDate() {
      const response = await axios.get('/alunos');
      console.log(response.data);
    }

    getDate();
  }, []);
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      <button type="button">Enviar</button>
    </Container>
  );
}
