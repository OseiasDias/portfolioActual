import styles from '../styles/componentes/ItensProjecto.module.css'
import img1 from '../assets/img/sites-1.png';
import img2 from '../assets/img/sites-9.png';
import img3 from '../assets/img/sites-3.png';
import img4 from '../assets/img/sites-4.png';
import img6 from '../assets/img/sites-6.png';
import img7 from '../assets/img/sites-7.png';
import img8 from '../assets/img/sites-8.png';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { MdAddChart } from "react-icons/md";
import ScrollRevealComponent from './ScrollReveal';
import { Link } from 'react-router-dom';



export default function ItensProjecto() {

    return (<>

        <div className='row' >
            <ScrollRevealComponent targetClass='scrollR' />
            <h2 className='fw-bold fs-2 mb-3 scrollR'>HTML5,CSS3,BOOSTRAP</h2>

            <div className='col-12 col-md-6 col-lg-4'>
                <div className={`my-2 scrollR ${styles.imagens}`}>

                    <div className={` ${styles.imagemTop}`}>
                        <img src={img1} alt='...' className='w-100' />
                    </div>
                    <div className={styles.textoBaixo}>
                        <h6>Tecnológias Usadas</h6>
                        <div className='justify-content-between d-flex'>
                            <div>
                                <FaHtml5 className={styles.itensRede} />
                                <FaCss3Alt className={styles.itensRede} />
                                <FaBootstrap className={styles.itensRede} />
                            </div>

                            <Link to="https://oseiasdias.github.io/ReplicasSites/36%C2%BA%20Fase%20Movie/index.html" target="_blank" >
                                <button className={` ${styles.meuBotton} `}>Ver Agora</button>
                            </Link>



                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4'>
                <div className={`my-2 scrollR ${styles.imagens}`}>

                    <div className={`${styles.imagemTop}`}>
                        <img src={img2} alt='...' className='w-100' />
                    </div>
                    <div className={styles.textoBaixo}>
                        <h6>Tecnológias Usadas</h6>
                        <div className='justify-content-between d-flex'>
                            <div>
                                <FaHtml5 className={styles.itensRede} />
                                <FaCss3Alt className={styles.itensRede} />
                                <FaBootstrap className={styles.itensRede} />
                            </div>

                            <Link to="https://oseiasdias.github.io/BIKE/Inicio.html" target="_blank" >
                                <button className={` ${styles.meuBotton} `}>Ver Agora</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4'>
                <div className={`my-2 scrollR ${styles.imagens}`}>

                    <div className={` ${styles.imagemTop}`}>
                        <img src={img3} alt='...' className='w-100' />
                    </div>
                    <div className={styles.textoBaixo}>
                        <h6>Tecnológias Usadas</h6>
                        <div className='justify-content-between d-flex'>
                            <div>
                                <FaHtml5 className={styles.itensRede} />
                                <FaCss3Alt className={styles.itensRede} />
                                <FaBootstrap className={styles.itensRede} />
                            </div>

                            <Link to="https://oseiasdias.github.io/ReplicasSites/39%20%C2%BA%20Fase%20Append/index.html" target="_blank" >
                                <button className={` ${styles.meuBotton} `}>Ver Agora</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4'>
                <div className={`my-2 scrollR  ${styles.imagens}`}>

                    <div className={` ${styles.imagemTop}`}>
                        <img src={img4} alt='...' className='w-100' />
                    </div>
                    <div className={styles.textoBaixo}>
                        <h6>Tecnológias Usadas</h6>
                        <div className='justify-content-between d-flex'>
                            <div>
                                <FaHtml5 className={styles.itensRede} />
                                <FaCss3Alt className={styles.itensRede} />
                                <FaBootstrap className={styles.itensRede} />
                            </div>

                            <Link to="https://oseiasdias.github.io/EleganciaSite/services.html" target="_blank" >
                                <button className={` ${styles.meuBotton} `}>Ver Agora</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>


            <div className='col-12 col-md-6 col-lg-4'>
                <div className={`my-2 scrollR  ${styles.imagens}`}>
                    <div className={` ${styles.imagemTop}`}>
                        <h2 className={styles.fontBreve}>Brevemente ,Mais carregamentos...</h2>
                        <MdAddChart className={styles.addItem} />
                    </div>
                </div>
            </div>


        </div>

        <hr className='mt-3 scrollR' />
        <div className='row' >

            <h2 className='fw-bold fs-2 mb-3 mt-5 scrollR'>HTML5,CSS3,BOOSTRAP + JS + REACT.js</h2>

            <div className='col-12 col-md-6 col-lg-4'>
                <div className={`my-2 scrollR ${styles.imagens}`}>

                    <div className={` ${styles.imagemTop}`}>
                        <img src={img6} alt='...' className='w-100' />
                    </div>
                    <div className={styles.textoBaixo}>
                        <h6>Tecnológias Usadas</h6>
                        <div className='justify-content-between d-flex'>
                            <div>
                                <FaHtml5 className={styles.itensRede} />
                                <FaCss3Alt className={styles.itensRede} />
                                <FaBootstrap className={styles.itensRede} />
                                <TbBrandJavascript className={styles.itensRede} />
                                <FaReact className={styles.itensRede} />
                            </div>

                            
                            <Link to="https://oseiasdiasdewi.netlify.app/" target="_blank" >
                                <button className={` ${styles.meuBotton} `}>Ver Agora</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4'>
                <div className={`my-2 scrollR ${styles.imagens}`}>

                    <div className={`${styles.imagemTop}`}>
                        <img src={img7} alt='...' className='w-100' />
                    </div>
                    <div className={styles.textoBaixo}>
                        <h6>Tecnológias Usadas</h6>
                        <div className='justify-content-between d-flex'>
                            <div>
                                <FaHtml5 className={styles.itensRede} />
                                <FaCss3Alt className={styles.itensRede} />
                                <FaBootstrap className={styles.itensRede} />
                                <TbBrandJavascript className={styles.itensRede} />
                                <FaReact className={styles.itensRede} />
                            </div>

                            <button className={` ${styles.meuBotton} `}>Ver Agora</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4'>
                <div className={`my-2 scrollR ${styles.imagens}`}>

                    <div className={` ${styles.imagemTop}`}>
                        <img src={img8} alt='...' className='w-100' />
                    </div>
                    <div className={styles.textoBaixo}>
                        <h6>Tecnológias Usadas</h6>
                        <div className='justify-content-between d-flex'>
                            <div>
                                <FaHtml5 className={styles.itensRede} />
                                <FaCss3Alt className={styles.itensRede} />
                                <FaBootstrap className={styles.itensRede} />
                                <TbBrandJavascript className={styles.itensRede} />
                                <FaReact className={styles.itensRede} />
                            </div>

                            <button className={` ${styles.meuBotton}`}>Ver Agora</button>

                        </div>
                    </div>
                </div>
            </div>


            <div className='col-12 col-md-6 col-lg-4'>
                <div className={`my-2 scrollR  ${styles.imagens}`}>
                    <div className={` ${styles.imagemTop}`}>
                        <h2 className={styles.fontBreve}>Brevemente ,Mais carregamentos...</h2>
                        <MdAddChart className={styles.addItem} />
                    </div>
                </div>
            </div>


        </div>

    </>);
}