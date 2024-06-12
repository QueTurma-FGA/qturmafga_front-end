import { useSearchParams } from 'react-router-dom';
import logoQturmaFGA from '../../assets/logoQTurmaFGA.png'
import styles from './professors.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Professors = () => {
  
  const [searchParams] = useSearchParams();
  const discipline = searchParams.get("discipline")

  return (
    <body>
      <Header />
      {/* <h1>{discipline}</h1> */}
      <main>
        <div id="principal">
            <div className={styles['resultados-exibidos']}>
                <p>Exibindo resultados para {discipline}</p>
            </div>
        </div>
      </main>
      <Footer />
    </body>
  );
}

export default Professors
