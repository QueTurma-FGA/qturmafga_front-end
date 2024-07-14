import React, { useState, useEffect, useLayoutEffect } from 'react';
import styles from './home.module.css';
import TablePagination from '../../components/TablePagination';
import { getAllDisciplines } from '../../services/disciplines';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const normalizeText = (text) => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};

const tableFields = [
  { key: 'codigo', label: 'Código' },
];

const Home = () => {
  const navigate = useNavigate();

  const [materias, setMaterias] = useState([]);
  const [filterMaterias, setFilterMaterias] = useState([]);

  const listAllDisciplines = async () => {
    const dados = await getAllDisciplines();
    setMaterias(dados.data);
    setFilterMaterias(dados.data);
  };

  useLayoutEffect(() => {
    listAllDisciplines();
  }, []);

  const handleRowClick = (row) => {
    navigate(`/professors/${row.codigo}`);
  };

  const tableDataSettings = (field, data, record) => {
    return `${record.codigo} - ${record.nome}`;
  };

  const handleChangeMateria = (e) => {
    let str = normalizeText(e.target.value);

    let filterMaterias = materias.filter(
      data =>
        normalizeText(data.codigo).includes(str) ||
        normalizeText(data.nome).includes(str)
    );
    setFilterMaterias(filterMaterias);
  };

  return (
    <>
      <Header />
      <main>
        <div className={styles.principal}>
          <div className={styles.searchDesktop}>
            <input
              type="text"
              name="input-box"
              className={styles.ibox}
              placeholder="Pesquise uma matéria por código ou nome"
              onChange={handleChangeMateria}
            />
          </div>
          <div className={styles.searchTablet}>
            <input
              type="text"
              name="input-box"
              className={styles.ibox}
              placeholder="Pesquise uma matéria por código ou nome"
              onChange={handleChangeMateria}
            />
          </div>
          <div className={styles.searchMobile}>
            <input
              type="text"
              name="input-box"
              className={styles.ibox}
              placeholder="Pesquise uma matéria"
              onChange={handleChangeMateria}
            />
          </div>
        </div>
        <TablePagination
          frontPagination
          fields={tableFields}
          data={filterMaterias}
          dataSettings={tableDataSettings}
          rowsPerPageOptions={['6', '10', '25', '50', '100']}
          onRowClick={handleRowClick}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
