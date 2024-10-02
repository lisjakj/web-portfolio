import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/kokteli.png'
import vanzemljac from '../../assets/vanzemljac.png'
import vecera from '../../assets/vecera.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.ProjectsContainer}>
            <ProjectCard 
            src={viberr} 
            link="https://hr.wikipedia.org/wiki/Tequila"
            h3="Jazavac"
            p="Ti nikad nemas"
            />
            <ProjectCard 
            src={vanzemljac} 
            link="https://www.google.com/search?q=pingvin&client=opera&hs=FJX&sca_esv=c95792980f3c473c&sca_upv=1&udm=2&biw=600&bih=574&sxsrf=ADLYWIKdNJkHff6FM5fNolg97YRvqW52EA%3A1727829533740&ei=HZb8Zu7yLIm9i-gPzPqJoAk&ved=0ahUKEwiu9dzMuu6IAxWJ3gIHHUx9ApQQ4dUDCBA&uact=5&oq=pingvin&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3Bpbmd2aW4yCBAAGIAEGLEDMgUQABiABDIEEAAYAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARItgxQAFi9CnAAeACQAQCYAZABoAGjBqoBAzAuN7gBA8gBAPgBAZgCB6ACwQbCAgQQIxgnwgILEAAYgAQYsQMYgwHCAg4QABiABBixAxiDARiKBZgDAJIHAzAuN6AH0SE&sclient=gws-wiz-serp#vhid=5vYgxIJmJHZhIM&vssid=mosaic"
            h3="Vanze mljac"
            p="Slatki"
            />
            <ProjectCard 
            src={vecera} 
            link="https://web.coolinarika.com/namirnica/kozice-40a48ff2-610e-11eb-b145-0242ac12001a"
            h3="Lazanjeee"
            p="Kozica"
            />
        </div>
    </section>
  )
}

export default Projects