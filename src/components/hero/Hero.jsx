import React from "react";
import heroImage from "../../../assets/hero/heroImage2.png";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Alex</h1>
            <p className={styles.description}>
                I'm a fullstack developer with a B.S. in Computer Science from Rutgers University. 
                I have experience with Python, Java, React, SQL, AWS, Azure, and more. 
                Reach out if you'd like to learn more!
            </p>
            <a href="mailto:alexkyuchukov@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImage} alt="Hero image of me" className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>;
}