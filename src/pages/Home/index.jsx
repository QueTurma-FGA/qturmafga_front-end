import { useState, useEffect, useLayoutEffect } from 'react'
import logoQturmaFGA from '../../assets/logoQTurmaFGA.png'
import styles from './home.module.css'
import TablePagination from '../../components/TablePagination'
import { getAllDisciplines } from '../../services/disciplines'
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const tableFields = [
  {key: 'codigo', label: 'codigo'},
]

const Home = () => {
  const navigate = useNavigate()

  const [materias, setMaterias] = useState([]); 
  const [filterMaterias, setFilterMaterias] = useState([]); 
  
  const listAllDisciplines = async () => {
    const dados = await getAllDisciplines()
    setMaterias(dados.data)
    setFilterMaterias(dados.data)
  }

  useLayoutEffect(() => {
    listAllDisciplines()
  }, [])

  const handleRowClick = (row) => {  
    navigate(`/professors?discipline=${row.codigo}`);
  }
  
  const tableDataSettings = (field, data, record) => {
    return `${record.codigo} - ${record.nome}`
  }
  
  const handleChangeMateria = (e) => {
    let str = e.target.value.toUpperCase()

    let filterMaterias = materias.filter(data => data.codigo.includes(str) || data.nome.includes(str))
    setFilterMaterias(filterMaterias)
  }
  
  return ( 
    <body>
      <Header/>
      <main>
        <div className={styles.principal}>
          <div className={styles.search}>
            <input 
              type="text" 
              name="input-box" 
              className={styles.ibox} 
              placeholder="Pesquise uma matéria por código ou nome"
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
    </body>
  );
}

export default Home