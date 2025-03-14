import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id="footer" className={styles.container}>
        <p>&copy; 2024 Jakov Lisjak. <br />
        Sva prava pridržana.
        </p>
    </section>
  )
}

export default Footer