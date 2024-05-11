import logoQturmaFGA from '../../assets/logoQTurmaFGA.png'
import bannerAprender from '../../assets/bannerAprender.png'
import styles from './home.module.css'
import TablePagination from '../../components/TablePagination'

import data from '../../components/TablePagination/data'

const Home = () => {
  const handleRowClick = (row) => {
    console.log(row)
  }
  
  const handlePageChange = (pageSize) => {
    console.log(pageSize)
  }

  const tableDataSettings = (field, data, record) => {
    return data
  }

  return (
    <div className={styles.homeContainer}>
        <img src={logoQturmaFGA} alt="Logo UnB Qturma?FGA" width='600px'/>
        <img src={bannerAprender} alt="Banner Aprender UnB" width="1780px"/>

        <input className={styles.input} type="text" />
      
        <div styles={{width: '100%'}}>
          <TablePagination
            frontPagination
            // data={[]}
            data={data}
            dataSettings={tableDataSettings}
            // fields={tableFields}
            // fields={data}
            rowsPerPageOptions={['5', '10', '25', '50', '100']}
            // rowsPerPageDefault={10}
            onRowClick={handleRowClick}
            onPageChange={handlePageChange} // use in back pagination
            // totalItens={0} // use in back pagination
            // actions
            // grid boxShadow borderRadius
            // // actions={{
            // //   view: {},
            // //   edit: {},
            // //   delete: {}
            // // }}
        />
        </div>      
      <footer>
        <p>&copy; Feudo Preto - Terras Devastadas</p>
      </footer>
    </div>
  );

  

}

export default Home