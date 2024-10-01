import imagemPerfil from "../assets/img/edgar.jpg";

import styles from "../styles/componentes/Sobre.module.css";

import {
  FaPeopleGroup,
  FaAward,
  FaChevronRight,
  FaNewspaper,
} from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { Ri24HoursLine } from "react-icons/ri";

import { IoBookSharp, IoGameController } from "react-icons/io5";
import { PiFilmSlateFill } from "react-icons/pi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { SiRemedyentertainment } from "react-icons/si";
import { FaMusic } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";

import ScrollRevealComponent from "./ScrollReveal";
import { Certificado1 } from "../assets/img/Capturev.PNG";

function Iteresses() {
  return (
    <>
      <section>
        <ScrollRevealComponent targetClass="scrollR" />

        <div className={`row mt-5  ${styles.divInteresses}`}>
          <h3 className={`mt-2  ${styles.textoTop}`}>INTERESSES</h3>

          <div className="col-12 col-md-4 col-lg-3 my-3 ">
            <div className={` h-100 ${styles.divInter}`}>
              <p>
                <IoBookSharp className={styles.subIcones} /> Leitura de Livros
                de TI{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-3 ">
            <div className={` h-100 ${styles.divInter}`}>
              <p>
                <IoGameController className={styles.subIcones} /> Videos Games{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-3 ">
            <div className={` h-100 ${styles.divInter}`}>
              <p>
                <PiFilmSlateFill className={styles.subIcones} /> Assistir
                Séries/Filmes{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-3 ">
            <div className={` h-100 ${styles.divInter}`}>
              <p>
                <FaNewspaper className={styles.subIcones} /> Noticias{" "}
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3 my-3 ">
            <div className={` h-100 ${styles.divInter}`}>
              <p>
                <MdOutlineSportsSoccer className={styles.subIcones} /> Desportos{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-3 ">
            <div className={` h-100 ${styles.divInter}`}>
              <p>
                <SiRemedyentertainment className={styles.subIcones} />{" "}
                Entretenimentos{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-3 ">
            <div className={` h-100 ${styles.divInter}`}>
              <p>
                <FaMusic className={styles.subIcones} />
                Musicas{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-3 ">
            <div className={` h-100 ${styles.divInter}`}>
              <p>
                <FaPlaneDeparture className={styles.subIcones} /> Viagens{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Certificados() {
  return (
    <>
      <section>
        <div className={`row mt-5  ${styles.divInteresses}`}>
          <h3 className={`mt-2  ${styles.textoTop}`}>Certificações</h3>

          <div className="col-12 col-md-4 col-lg-3 my-3 ">
            <div className={` h-100 ${styles.divInter}`}>
              <img
                src={Certificado1}
                className="w-100"
                alt="certificado de desing responsive web"
              />
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-3 ">
            <div className={` h-100 ${styles.divInter}`}>
              <img
                src={Certificado1}
                className="w-100"
                alt="certificado de desing responsive web"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Sobre() {
  return (
    <>
      <section className={styles.seccao_sobre}>
        <div className={`container ${styles.container}`}>
          <div className={styles.caixa}>
            <div className={`row `}>
              <header className="mt-lg-3">
                <h6 className={`mt-2 scrollR ${styles.textoTop}`}>SOBRE</h6>
                <h3 className={`mb-4 scrollR ${styles.textoBottom}`}>
                  SAIBA MAIS SOBRE MIM
                </h3>
              </header>

              <div className={`col-12  col-md-12 col-lg-4 ${styles.boxImagem}`}>
                <img src={imagemPerfil} alt="imagem do perfil" />
              </div>

              <div
                className={`col-12 scrollR col-md-12 col-lg-8 ${styles.boxTexto}`}
              >
                <div className={`row`}>
                  <h3 className={styles.textoProgr}>Desenvolvidor Web</h3>
                  <p>
                    <span>Dados Gerais</span>
                  </p>
                  <div className="col-lg-6 ">
                    <ul>
                      <li>
                        <FaChevronRight className={`${styles.direita}`} />
                        <span>Aniversário: </span>
                        22/10/1997
                      </li>

                      <li>
                        <FaChevronRight className={`${styles.direita}`} />
                        <span>Telefone:</span>
                        +244 938629915
                      </li>

                      <li>
                        <FaChevronRight className={`${styles.direita}`} />
                        <span>Morada:</span>
                        Viana
                      </li>

                      <li>
                        <FaChevronRight className={`${styles.direita}`} />
                        <span>Idade:</span>
                        27 anos
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 ">
                    <ul>
                      <li>
                        <FaChevronRight className={`${styles.direita}`} />
                        <span>Grau:</span>
                        Finalista em Ciências da Computação
                      </li>

                      <li>
                        <FaChevronRight className={`${styles.direita}`} />
                        <span>Email:</span>
                        oseiasdias1953@gmail.com
                      </li>

                      <li>
                        <FaChevronRight className={`${styles.direita}`} />
                        <span>Freelance:</span>
                        Disponível
                      </li>
                    </ul>
                  </div>

                  <div className={styles.sobreMin}>
                    <hr />
                    <p>
                      Apaixonado por tecnologia, busco constantemente aprimorar
                      minhas habilidades. Finalista em Ciências da Computação
                      pela Universidade Agostinho Neto, possuo dois anos de
                      experiência em desenvolvimento front-end. Sou proativo,
                      organizado e busco oportunidades para contribuir com meus
                      conhecimentos em empresas de TI.
                    </p>
                    <p>
                      Ao longo da minha jornada, desenvolvi um sólido domínio
                      em:
                      <ul>
                      <p><FaChevronRight className={`${styles.direita}`} /><span>HTML5</span></p>
                      <p><FaChevronRight className={`${styles.direita}`} /><span>CSS3</span></p>
                      <p><FaChevronRight className={`${styles.direita}`} /><span>JavaScript</span></p>
                      <p><FaChevronRight className={`${styles.direita}`} /><span>Bootstrap</span></p>
                      <p><FaChevronRight className={`${styles.direita}`} /><span>React.js</span></p>
                      <p><FaChevronRight className={`${styles.direita}`} /><span>Tailwind CSS</span></p>
                      <p><FaChevronRight className={`${styles.direita}`} /><span>Node.js</span></p>
                      <p><FaChevronRight className={`${styles.direita}`} /><span>MongoDB</span></p>

                    
                      </ul>
                    </p>
                    <p>
                      Sou um aprendiz autodidata, sempre buscando as últimas
                      tendências do mercado. Agradeço a sua atenção e espero ter
                      a oportunidade de discutir minhas qualificações com você.
                    </p>
                  </div>
                </div>
              </div>

              <Especificacao />

              <Certificados />

              <Habilidades />

              <Iteresses />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Especificacao() {
  return (
    <>
      <section className={styles.seccao_espc}>
        <div className="row">
          <div className={`col-12 col-md-12 col-lg-3 ${styles.div_espc}`}>
            <div className="my-3 ">
              <p>
                <FaPeopleGroup className={styles.itens} />
              </p>
              <p>7</p>
              <p>Clientes satisfeitos</p>
            </div>
          </div>

          <div className={`col-12 col-md-12 col-lg-3 ${styles.div_espc}`}>
            <div className="my-3 ">
              <p>
                <GrProjects className={styles.itens} />
              </p>
              <p>21</p>
              <p>Projectos</p>
            </div>
          </div>

          <div className={`col-12 col-md-12 col-lg-3 ${styles.div_espc}`}>
            <div className="my-3 ">
              <p>
                <Ri24HoursLine className={styles.itens} />
              </p>
              <p>434</p>
              <p>Ultimas Horas</p>
            </div>
          </div>

          <div className={`col-12 col-md-12 col-lg-3 ${styles.div_espc}`}>
            <div className="my-3 ">
              <p>
                <FaAward className={styles.itens} />
              </p>
              <p>1</p>
              <p>Prémio</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Habilidades() {
  return (
    <>
      <section>
        <h6 className={`mt-5 mb-3 ${styles.textoTop}`}>HABILIDADES</h6>
        <div className={`row`}>
          <div className="col-12 col-md-12 col-lg-6">
            <div className={styles.percentagem}>
              <p className="justify-content-between d-flex scrollR">
                <span>HTML5</span> <span>95%</span>
              </p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success "
                  style={{ width: "95%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className={styles.percentagem}>
              <p className="justify-content-between d-flex scrollR">
                <span>CSS3</span> <span>90%</span>
              </p>
              <div
                className="progress "
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success "
                  style={{ width: "90%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className={styles.percentagem}>
              <p className="justify-content-between d-flex scrollR">
                <span>JAVASCRIPT</span> <span>55%</span>
              </p>
              <div
                className="progress "
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success "
                  style={{ width: "55%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className={styles.percentagem}>
              <p className="justify-content-between d-flex scrollR">
                <span>BOOSTRAP</span> <span>83%</span>
              </p>
              <div
                className="progress "
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success "
                  style={{ width: "83%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className={styles.percentagem}>
              <p className="justify-content-between d-flex scrollR">
                <span>REACT.js</span> <span>75%</span>
              </p>
              <div
                className="progress "
                role="progressbar"
                aria-label="Success example"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-bar bg-success "
                  style={{ width: "75%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
