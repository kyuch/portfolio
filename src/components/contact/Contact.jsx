import React from 'react'
import emailIcon from "../../../assets/contact/emailIcon.png"
import githubIcon from "../../../assets/contact/githubIcon.png"
import linkedinIcon from "../../../assets/contact/linkedinIcon.png"
import styles from "./Contact.module.css"


export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact Me</h2>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
            <a href="mailto:alexkyuchukov@gmail.com"><img src={emailIcon} alt="Email icon" /></a>
                <a href="mailto:alexkyuchukov@gmail.com">alexkyuchukov@gmail.com</a>
            </li>
            <li className={styles.link}>
            <a href="https://www.linkedin.com/in/alexander-kyuchukov"><img src={linkedinIcon} alt="LinkedIn icon" /></a>
                <a href="https://www.linkedin.com/in/alexander-kyuchukov">linkedin.com/in/alexander-kyuchukov</a>
            </li>
            <li className={styles.link}>
                <a href="https://github.com/kyuch"><img src={githubIcon} alt="Github icon" /></a>
                <a href="https://github.com/kyuch">github.com/kyuch</a>
            </li>
        </ul>
    </footer>
  )
}
