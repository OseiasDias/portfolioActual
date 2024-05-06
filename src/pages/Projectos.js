
import Menu from '../components/Menu';
import ItensProjecto from '../components/ItensProjecto';
import styles from '../styles/paginas/Projectos.module.css';




export default function Projectos(){

    return(
        <>
            <section  className={styles.seccao_Projectos}>
                <header>
                    <Menu corFundo='#000000' />
                </header>

                <div className={`container ${styles.containerProj}`}>

                       <div className={styles.back}>

                            <ItensProjecto />

                       </div>
                </div>

               

           </section>
        </>
    )
}