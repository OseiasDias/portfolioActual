

import Menu from '../components/Menu';
import Sobre from '../components/Sobre'
import styles from '../styles/paginas/About.module.css'


export default function About() {

    return (
        <>

            <section className={styles.seccao_sobre}>
                <header>
                    <Menu corFundo='#000000' />
                </header>

                <Sobre />
                

               

           </section>
        </>
    )
}