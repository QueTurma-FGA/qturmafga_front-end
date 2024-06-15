import axios from 'axios'

const baseUrl = "http://localhost:3333"

const getAllDisciplines = () => {
    return axios({
      method: 'get',
      url: `${baseUrl}/list-all-disciplines`,
  })
};

export { getAllDisciplines }