import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';

import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

export default function Fotos({ match }) {
  const dispatch = useDispatch();

  const id = get(match, 'params.id', '');
  const [isLoading, setIsloading] = useState(false);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    async function getPhoto() {
      try {
        setIsloading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');
        setFoto(Foto);
        setIsloading(false);
      } catch (err) {
        toast.error('Erro ao obter a imagem');
        setIsloading(false);
      }
    }

    getPhoto();
  }, []);

  const handleChange = async (e) => {
    const fotoFile = e.target.files[0];
    const fotoUrl = URL.createObjectURL(fotoFile);

    setFoto(fotoUrl);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', fotoFile);

    try {
      setIsloading(true);

      await axios.post('/fotos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Foto Enviada com sucesso!');

      setIsloading(false);
    } catch (err) {
      setIsloading(false);

      const { status } = get(err, 'response.status', 0);
      toast.error('Erro ao enviar a foto!');

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? (
            <img src={foto} alt="foto" crossOrigin="anonymous" />
          ) : (
            'Selecionar'
          )}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
