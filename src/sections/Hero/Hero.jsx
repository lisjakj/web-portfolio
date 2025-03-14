import styles from './HeroStyles.module.css'
import heroImg from '../../assets/headshot.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/jakovlisjakCV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark
    const githubIcon = theme === 'light' ? githubLight : githubDark

  return (
    <section id="Hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero} 
            src={heroImg} 
            alt="Profile picture of Jakov Lisjak"
            />
            <img 
            className={styles.colorMode} 
            src ={themeIcon} 
            alt="Color mode icon" 
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Jakov
                <br />
                Lisjak
            </h1>
            <h2>Full-stack developer</h2>
            
            <p className={styles.description}>
            S entuzijazmom za razvoj modernih React web aplikacija i fokusom na izvrsno korisničko iskustvo.
            </p>
            <a href={CV} download>
                <button className="hover">
                    Životopis
                </button>
            </a>
            <span>
                <a href="https://x.com/jakovlis" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://www.linkedin.com/in/jakov-lisjak-818536337" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
                <a href="https://github.com/lisjakj" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>
            </span>
        </div>
    </section>
  )
}

export default Hero