import { useState } from 'react'
import logoQturmaFGA from '../../assets/logoQTurmaFGA.png'
import styles from './home.module.css'
import TablePagination from '../../components/TablePagination'

import data from '../../components/TablePagination/data'

const tableFields = [
  {key: 'codigo', label: 'codigo'},
]

const Home = () => {
  const [materias, setMaterias] = useState(data); 
  const handleRowClick = (row) => {
    console.log(row)
  }
  
  const tableDataSettings = (field, data, record) => {
    return `${record.codigo} - ${record.nome}`
  }
  
  const handleChangeMateria = (e) => {
    let str = e.target.value.toUpperCase()

    let filterMaterias = data.filter(data => data.codigo.includes(str) || data.nome.includes(str))
    setMaterias(filterMaterias)
  }
  
  return ( 
    <body>
      <header>
        <div className={styles['logo-empresa']}>
          <img src={logoQturmaFGA} alt="Logo UnB Qturma?FGA"/>
        </div>

      </header>
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
          data={materias}
          dataSettings={tableDataSettings}
          rowsPerPageOptions={['6', '10', '25', '50', '100']}
          onRowClick={handleRowClick}
        />
        
      </main>
        
      <footer>
          <p> Todos os direitos reservados <a href="#">&copy; 2024 QTURMA</a>  </p>
      </footer>    
    </body>
    );
}

export default Home