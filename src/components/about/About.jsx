import React from 'react'
import aboutImage from "../../../assets/about/aboutImage.png"
import cursorIcon from "../../../assets/about/cursorIcon.png"
import serverIcon from "../../../assets/about/serverIcon.png"
import uiIcon from "../../../assets/about/uiIcon.png"
import backend from "../../../assets/about/backend.png"
import frontend from "../../../assets/about/frontend.png"
import cloud from "../../../assets/about/cloud.png"
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img 
                src={aboutImage}
                alt="Me" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}> 
                    <img src={frontend} alt="frontend icon" className={styles.itemImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>As a developer with front-end experience, I create intuitive web interfaces using JavaScript, HTML, CSS, and React, with a focus on delivering clean, user-centric design.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>  
                    <img src={backend} alt="backend icon" className={styles.itemImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>As a developer with extensive back-end experience, I specialize in building efficient and reliable solutions using Java, Python, SQL, and C.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={cloud} alt="cloud icon" className={styles.itemImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Cloud Knowledge</h3>
                        <p>As a cloud computing specialist, I hold an Azure Fundamentals certification and leverage AWS services including EC2 and S3 to develop robust full-stack applications.</p>
                    </div>
                </li>
            </ul>
        </div>

    </section>
  )
}
