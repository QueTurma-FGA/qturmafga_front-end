import axios from 'axios';

const baseUrl = "http://localhost:3333";

const addAvaliacao = async ({ professorId, didatica, metodologia, coerenciaDeAvaliacao, disponibilidade, materiaisDeApoio }) => {
  try {
    const response = await axios.post(`${baseUrl}/create-avaliacao`, {
      professorId,
      didatica,
      metodologia,
      coerenciaDeAvaliacao,
      disponibilidade,
      materiaisDeApoio
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar avaliação:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const getMediaAvaliacoes = async (email) => {
  try {
    const response = await axios.get(`${baseUrl}/media-avaliacoes/${email}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter média das avaliações:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const getMediaAvaliacaoPorCriterio = async (email, criterio) => {
  try {
    const response = await axios.get(`${baseUrl}/avaliacoes-professor/${email}/${criterio}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar média de avaliação por critério');
  }
};

export {addAvaliacao, getMediaAvaliacoes, getMediaAvaliacaoPorCriterio}