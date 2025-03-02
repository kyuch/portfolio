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
                    <img src={cloud} alt="cloud icon" className={styles.itemImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Cloud Computing</h3>
                        <p>
                        As a cloud-focused IT professional and developer with an Azure Fundamentals certification, I leverage Azure and AWS services to provision and manage virtual machines and utilize secure, efficient storage solutions.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}> 
                    <img src={frontend} alt="frontend icon" className={styles.itemImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>IT Experience</h3>
                        <p>As an IT professional, I leverage OSI layer expertise and hands-on hardware/software troubleshooting to deliver seamless technical support, ensuring exceptional user experiences.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>  
                    <img src={backend} alt="backend icon" className={styles.itemImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Full-stack Development</h3>
                        <p>As a full-stack developer, I create intuitive web interfaces using JavaScript, HTML, CSS, and React, while building efficient and reliable back-end solutions in Java, Python, SQL, and C—all with a focus on clean, user-centric design.</p>
                    </div>
                </li>
            </ul>
        </div>

    </section>
  )
}
