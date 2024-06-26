export const addAvaliacao = async ({ materiaId, professorId, didatica, metodologia, coerenciaDeAvaliacao, disponibilidade, materiaisDeApoio }) => {
  try {
    const response = await api.post('/add-avaliacao', {
      materiaId,
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
  
  export const getAverageAvaliacoes = async (professorId) => {
    const response = await api.get(`/average-avaliacoes/${professorId}`);
    return response.data;
  };