import React, { useState } from 'react'
import styles from './Header.module.css'
import appname from '../../assets/CodeTech.svg'
import Home from '../../assets/home.svg'
import Mobile from '../../assets/mobile.svg'
import Projects from '../../assets/projects.svg'
import User from '../../assets/user.svg'
import Services from '../../assets/monitor.svg'
import Menu from  '../../assets/menu (1).svg'
import Close from  '../../assets/close.svg'

const Header = () => {
  const[dropdown, setDropdown] = useState(false);
  
  return (
    <>
    <div className={styles.main}>
      <header className={styles.header} style={{borderBottom: dropdown ? "0" : null }}>
        <div >
          <img src={appname} alt="" />
        </div>
        
        <div className={styles.headermenu}>
          <ul className={[styles.listing,styles.com].join(' ')} >
            <li className={styles.links}>
              <img src={Home} alt="" />
              <a href='#Home' style={{textDecoration:"none", color:"black"}}>Home</a>
            </li>
            <li className={styles.links}>
            <img src={Services} alt="" />
            <a href='#Services' style={{textDecoration:"none", color:"black"}}>Services</a>
            </li>
            <li className={styles.links}>
            <img src={Projects}alt="" />
              <a href='#Projects' style={{textDecoration:"none", color:"black"}}>Projects</a>
            </li>
            <li className={styles.links}>
            <img src={User} alt="" />
            <a href='#Client' style={{textDecoration:"none", color:"black"}}>Client</a>
            </li>
          </ul>
          <div className={[styles.mobile,styles.com].join(' ')}>
              <img src={Mobile} alt="" />
              <span>+111222333</span>
          </div>
          <button type='button' className={[styles.button, styles.com].join(' ')}>
            Get Started
          </button>
        
          </div>
          <div  className={styles.dropdown}onClick={()=>{setDropdown(!dropdown)}} >
            <img src={!dropdown ? Menu : Close} alt="" />
          </div>
      </header>
      {dropdown && <div className={styles.dropdownmenu}>
        <div> <img src={Home} alt="" /> <a href='#Home' style={{textDecoration:"none", color:"black"}}>Home</a></div>
        <div> <img src={Services} alt="" /> <a href='#Services' style={{textDecoration:"none", color:"black"}}>Services</a></div>
        <div> <img src={Projects}alt="" />  <a href='#Projects' style={{textDecoration:"none", color:"black"}}>Projects</a></div>
        <div> <img src={User} alt="" /><a href='#Client' style={{textDecoration:"none", color:"black"}}>Client</a></div>
        <div><img src={Mobile} alt="" /> + 1111112222333</div>
        <button type='button'>Get Started</button>
      </div>
      }
      </div>
      
    </>
  )
}
export default Header;