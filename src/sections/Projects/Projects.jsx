import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/brziotkup.png'
import vanzemljac from '../../assets/heartistry.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projekti</h1>
        <div className={styles.ProjectsContainer}>
            <ProjectCard 
            src={viberr} 
            link="https://brziotkupvozila.com"
            h3="Otkup vozila"
            p="Stranica za profesionalni otkup vozila"
            />
            <ProjectCard 
            src={vanzemljac} 
            link="https://limun.netlify.app"
            h3="Web shop"
            p="Dropshipping webshop sa nakitom"
            />
        </div>
    </section>
  )
}

export default Projects