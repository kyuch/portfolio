import React from 'react';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import styles from './Experience.module.css';

const importAllImages = (folder) => {
    const images = {};
    let modules;
    switch (folder) {
        case "skills":
            modules = import.meta.glob("../../../assets/skills/*.png", { eager: true });
            break;
        case "history":
            modules = import.meta.glob("../../../assets/history/*.png", { eager: true });
            break;
        default:
            throw new Error(`Unknown folder: ${folder}`);
      }  
    for (const path in modules) {
        const key = path.split('/').pop(); 
        images[key] = modules[path].default;
    }
    return images;
};

const skillimages = importAllImages("skills");
const historyimages = importAllImages("history");


export const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <ul className={styles.history}>{
                    history.map((historyItem, id) => (
                        <li key={id} className={styles.historyItem}>
                            <div className={styles.historyItemDetails}>
                                <h3>
                                    <img src={historyimages[historyItem.imageSrc]} alt={`${historyItem.organization} logo`} />
                                    {`${historyItem.role}, ${historyItem.organization}`}
                                </h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>{historyItem.experiences.map((experience, id) => (
                                    <li key={id}>{experience}</li>
                                ))}</ul>
                            </div>
                        </li>
                    ))
                }</ul>
                <div className={styles.skills}>
                    {skills.map((skill, id) => (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={skillimages[skill.imageSrc]} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>      
            </div>
        </section>
    );
};
