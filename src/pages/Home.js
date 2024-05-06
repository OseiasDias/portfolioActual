

import Menu from '../components/Menu';
import styles from '../styles/paginas/Home.module.css'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollRevealComponent from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <>


            <section className={styles.seccao_home} >
                <header>
                    <Menu corFundo='#00000000' />
                </header>
                <div className={styles.sub_seccao}>
                    <div className={`container`}>

                        <ScrollRevealComponent targetClass='scrollR' />

                        <div className={`row justify-content-center text-center  `}>
                            <div className={`col-12 scrollR col-md-11 col-lg-8 text-white z-2 ${styles.divisaoTexto}`}>

                                <h2 className='z-1 scrollR'>Oséias  Dias</h2>
                                <p className='z-1 scrollR'>Sou um <span>Programador Front-End</span> apaixonado por tecnólogias de informação</p>

                                <div className={styles.redes}>
                                    <Link to="https://twitter.com/edgar6471" target="_blank" >
                                        <FaXTwitter className={styles.icones} />
                                    </Link>
                                    <Link to="https://github.com/OseiasDias/Projectos_React" target="_blank" >
                                        <FaGithub className={styles.icones} />
                                    </Link>
                                    <Link to="https://www.facebook.com/edgar.opca" target="_blank" >
                                        <FaFacebook className={styles.icones} />
                                    </Link>
                                    <Link to="https://www.linkedin.com/in/oseias-edgar-057097259/" target="_blank" >
                                        <FaLinkedin className={styles.icones} />
                                    </Link>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


        </>)
}