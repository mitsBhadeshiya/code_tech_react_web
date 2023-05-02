import React from 'react'
import styles from './About.module.css'
import Stars from '../../assets/star.svg'
import Lady from '../../assets/lady.svg'
const About = () => {
  return (
    <div className={styles.about} id='Home'>
      <div className={styles.coloredCircles}></div>
      <div className={styles.coloredCircles}></div>
      <img src={Stars} className={styles.star} alt="" />
      <img src={Stars} className={styles.star} alt="" />
      <div className={styles.container}>
        <div className={styles.mainHeader}>WE ARE CREATING BEAUTIFUL WEBSITES</div>
        <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</div>
        <div><button>Button</button></div>
        <div className={styles.lady}>
           <img src={Lady}></img> 
        </div>
      </div>
      
    </div>

  )
}
export default About;