import Menu from '../components/Menu';
import Contactos from '../components/Contactos'
import styles from '../styles/paginas/Comunicador.module.css'




export default function Comunicador(){

    return(
      

        <>
            <section className={styles.seccao_comuicar}>
                <header>
                    <Menu corFundo='#000000' />
                </header>

                <div className={`container ${styles.containerComunica}`}>

                       <div className={styles.back}>
                       <Contactos />

                       </div>
                </div>

               

           </section>
        </>
       
    )
}




