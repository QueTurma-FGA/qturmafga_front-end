import logo from '../../assets/logo.png'
import fundoAprender from '../../assets/fundoAprender2.png'
import styles from './home.module.css'

const Home = () => {
  
  return (
    <div className={styles.homeContainer}>
      <img src={logo} alt="Logo UnB Qturma?FGA" />
      <img src={fundoAprender} alt="Logo UnB Qturma?FGA" />

      <span>Por favor, insira o código da disciplina UnB que deseja consultar</span>

      <footer>
        <p>&copy; Feudo Preto - Terras Devastadas</p>
      </footer>
    </div>
  );
}

export default Home