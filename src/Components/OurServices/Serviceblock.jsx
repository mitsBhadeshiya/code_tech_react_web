import React from 'react'
import styles from './Serviceblock.module.css'
import monitor from '../../assets/WebDevelopment.svg'
import Mobile from '../../assets/MobileApp.svg'
import shoppingBag from '../../assets/shoppingBag.svg'
import webdesign from '../../assets/icon-webdesign.svg'
export const Serviceblock = () => {
    const serviceData = [
        {name: "web design", photo: webdesign},
        {name: "web developement", photo: monitor},
        {name: "Apps development", photo: Mobile},
        {name: "e-commerce products", photo: shoppingBag}
]
    const services = serviceData.map((data, i)=>{
        return(
            <div className={styles.product} key={i}>
            <div className={styles.image}>
            <img src={data.photo} alt="" />
            </div>
            <div className={styles.name}>{data.name}</div>
        </div>
        )
    })
  return (
    <>
    {services}
    </>
  )
}
