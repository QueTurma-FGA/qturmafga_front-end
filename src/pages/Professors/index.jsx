import { useSearchParams } from 'react-router-dom';
import logoQturmaFGA from '../../assets/logoQTurmaFGA.png'
import styles from './professors.module.css'

const Professors = () => {
  
  const [searchParams] = useSearchParams();
  const discipline = searchParams.get("discipline")

  return (
    <body>
      <header>
        <div className={styles['logo-empresa']}>
          <img src={logoQturmaFGA} alt="Logo UnB Qturma?FGA"/>
        </div>

      </header>
      {/* <h1>{discipline}</h1> */}
      <main>
        <div id="principal">
            <div className={styles['resultados-exibidos']}>
                <p>Exibindo resultados para {discipline}</p>
            </div>
        </div>
      </main>
    </body>
  );
}

export default Professors
