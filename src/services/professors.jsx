// services/professors.jsx

import axios from 'axios';

const baseUrl = "http://localhost:3333";

const getProfessorsByDisciplineCode = (codigo) => {
    return axios({
        method: 'get',
        url: `${baseUrl}/list-professors-of-discipline/${codigo}`,
    });
};

export { getProfessorsByDisciplineCode };
