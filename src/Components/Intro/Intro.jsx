import React from 'react'
import styles from './Intro.module.css'
import Man from '../../assets/introman.svg'
const Intro = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.photoblock}>
                <img src={Man} alt="" />
                </div>
                <div className={styles.innermain}>
                    <div className={styles.mainheader}>
                        Who We Are
                    </div>
                    <div className={styles.description}>
                    Codetech Solutions is started in 2015 with an aim to provide best design solution to he mobile application technologies. The studio was started with design first approach and we have been exclusively dealing in mobile application user interface and Information architecture designing. Gradually, the team evolves with application development solution too. With the experience of working with 500+ startup clients, we learn the practical method of bringing an idea on paper to development and publication stage. Now we have privilege of working with many established companies too.
                    </div>

                </div>
            </div>
        </>
    )
}
export default Intro;