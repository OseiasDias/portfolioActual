
import styles from '../styles/componentes/Menu.module.css'
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom'

 

export default function Menu({ corFundo }) {

    const estiloDaDiv = {
      backgroundColor: corFundo,
    };
  
    return (
      <>
        <nav className={`navbar navbar-expand-lg  z-3 ${styles.menuInicial}`} style={estiloDaDiv}>
          <div className={`container-fluid ${styles.container}`} >
  
         

           <Link to="/" className={`navbar-brand text-white fs-2 fw-bold ${styles.navbar_brand}`}>
                Oséias Dias
            </Link>
  
            <button
              className={`navbar-toggler ${styles.botao_menu}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <HiMenuAlt3 className={styles.icone_menu} />
            </button>
         
  
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className={`navbar-nav mb-2 mb-lg-0 ${styles.lista}`}>
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Sobre" className="nav-link">Sobre</Link>
                </li>
               
                <li className="nav-item">
                  <Link to="/Projectos" className="nav-link">Projetos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Comunicador" className="nav-link">Contatos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  