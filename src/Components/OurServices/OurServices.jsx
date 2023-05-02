import React from 'react'
import styles from './OurServices.module.css'
import Line from '../../assets/line.svg'
import { Serviceblock } from './Serviceblock'
const OurServices = () => {
  return (
    <>
     <div className={styles.main} id='Services'>
        <div className={styles.headername}>
          <div>Our Services</div>
          <img src={Line} alt="" />
        </div>
        <div className={styles.services}>
          
          <Serviceblock/>
        

        </div>
    </div>

    </>
  )
}

export default OurServices;