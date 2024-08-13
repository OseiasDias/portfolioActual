import styles from '../styles/componentes/Contactos.module.css'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMapPin, LuPhoneCall } from "react-icons/lu";
import { PiEnvelopeSimple } from "react-icons/pi";
import { CiShare2 } from "react-icons/ci";
import ScrollRevealComponent from './ScrollReveal';
import {Link} from 'react-router-dom';


function Formulario() {


    
    

    return (

        <>
            <section>
            <ScrollRevealComponent targetClass='scrollR'/>
                <form className={ `w-100 ${styles.formulario} scrollR`} >
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6 scrollR'>
                            <input type='text' className={`w-100 ${styles.itensF}`} placeholder='Digite Seu Nome: ' />
                        </div>
                        <div className='col-12 col-md-6 col-lg-6 scrollR'>
                            <input type='email' className={`w-100 ${styles.itensF}`} placeholder='Digite Email: ' />
                        </div>
                        <div className='col-12 col-md-12 col-lg-12 scrollR'>
                            <input type='text'  className={`w-100 ${styles.itensF}`} placeholder='Qual é o seu Objectivo: ' />
                        </div>
                        <div className='col-12 col-md-12 col-lg-12 scrollR'>
                            <textarea col="12"  className={`w-100 ${styles.itensF}`} rows="8" placeholder='Deixe sua Mensagem' >

                            </textarea>
                        </div>
                    </div>
                    <button type='submit' className={styles.meuBotton}>Enviar Mensagem</button>
                </form>


            </section>
        </>
    )
}



export default function Contactos() {

    return (
        <>
            <section className={styles.seccao_contactos} >


                <div className='row'>

                    <header>
                        <h6 className={`mt-2 scrollR ${styles.textoTop}`}>CONTATO</h6>
                        <h2 className='fw-bold scrollR fs-1 my-3'>CONTATE-ME</h2>
                    </header>

                    <div className='col-12 col-md-6 col-lg-6 my-2 scrollR'>

                        <div className={` justify-content-start h-100 d-flex ${styles.divs}`}>
                            <div className=''>
                                <LuMapPin className={styles.itens} />
                            </div>

                            <div>
                                <span>Meu endereço</span>

                                <address>
                                    <p>Luanda-Viana,Grafanil</p>
                                </address>
                            </div>

                        </div>


                    </div>

                    <div className='col-12 col-md-6 col-lg-6 my-2 scrollR'>

                        <div className={` h-100 justify-content-start d-flex ${styles.divs}`}>
                            <div className=''>
                                <CiShare2 className={styles.itens} />
                            </div>

                            <div>
                                <span>Perfis Sociais</span>

                                <div className={styles.media}>
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

                    <div className='col-12 col-md-6 col-lg-6 my-2 scrollR'>

                        <div className={` h-100 justify-content-start d-flex ${styles.divs}`}>
                            <div className=''>
                                <LuPhoneCall className={styles.itens} />
                            </div>

                            <div>
                                <span>Me mande um e-mail</span>


                                <p> oseiasdias1953@gmail.com</p>

                            </div>

                        </div>


                    </div>

                    <div className='col-12 col-md-6 col-lg-6 my-2 scrollR'>

                        <div className={`h-100 justify-content-start d-flex ${styles.divs}`}>
                            <div className=''>
                                <PiEnvelopeSimple className={styles.itens} />
                            </div>

                            <div>
                                <span>Liga para mim</span>


                                <p>+244 938 629 915</p>

                            </div>

                        </div>


                    </div>



                </div>
            </section>

            <Formulario />
        </>
    )
}

