import React from 'react'
import aboutImage from "../../../assets/about/aboutImage.png"
import cursorIcon from "../../../assets/about/cursorIcon.png"
import serverIcon from "../../../assets/about/serverIcon.png"
import uiIcon from "../../../assets/about/uiIcon.png"
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
                    <img src={cursorIcon} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience .......</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>  
                    <img src={serverIcon} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing .......</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={uiIcon} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Cloud Knowledge</h3>
                        <p>I have extensive experience with Azure and AWS.......</p>
                    </div>
                </li>
            </ul>
        </div>

    </section>
  )
}
