
import styles from '../styles/componentes/Footer.module.css';


export default function Footer() {

    return (
        <>

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
        </>
    )
}