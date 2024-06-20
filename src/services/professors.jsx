import axios from 'axios';

const baseUrl = "http://localhost:3333";

const getProfessorsByDisciplineCode = async (codigo) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/list-professors-of-turma/${codigo}`,
    });
    return response;
  } catch (error) {
    console.error('Erro ao buscar professores:', error);
    throw error;
  }
};
//aaaaaaaaaaaaaaaaaa
export { getProfessorsByDisciplineCode };
