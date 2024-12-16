import React from 'react'
import projects from '../../data/projects.json'
import styles from "./Projects.module.css"
import github from "../../../assets/projects/githubIcon.png"
import extLink from "../../../assets/projects/extLink.png"

const importAllImages = () => {
    const images = {};
    const modules = import.meta.glob("../../../assets/projects/*.png", { eager: true });
    for (const path in modules) {
        const key = path.split('/').pop(); 
        images[key] = modules[path].default;
    }
    return images;
};
const projectImages = importAllImages();


export const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>{
            projects.map((project, id) => (
                <div key={id} className={styles.cardContainer}>
                    {/* <img src={projectImages[project.imageSrc]} alt={`Image of ${project.title}`} className={styles.image}/> */}
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <ul className={styles.skills}>{
                        project.skills.map((skill,id) => (
                            <li key={id} className={styles.skill}>{skill}</li>
                        ))}</ul>
                    <div className={styles.links}>
                        <a target="_blank" href={project.demo} className={styles.linkGreen}>
                            <img src={extLink} alt="External Link" className={styles.buttonImage}/>View</a>
                        <a target="_blank" href={project.source} className={styles.link}>
                            <img src={github} alt="Github logo" className={styles.buttonImage}/>GitHub</a>
                    </div>
                </div>
        ))}</div>
    </section>
  )
}
