import React from 'react'
import styles from './Footer.module.css'
import codetechlogo from '../../assets/icon-CodeTech-white.svg'
import iInstagram from '../../assets/icon-instagram.svg'
import iFacebook from '../../assets/icon-facebook.png'
import iLinkdin from '../../assets/icon-linkdin.svg'
import iTwitter from '../../assets/icon-twitter.svg'
import Line from '../../assets/line.svg'
import iCall from '../../assets/icon-call.svg'
import iMessage from '../../assets/icon-message.svg'
import iLocation from '../../assets/icon-location.svg'
const platforms = [iInstagram, iFacebook, iTwitter, iLinkdin];
const linkdata = ['loremlorem', 'ipsumipsun', 'loremfdasf', 'ipsyui'];
const Footer = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.contactdiv}>
                    <div className={styles.contactus}>
                        <span>Contact Us</span>
                        Aut fuga fuga non fugiat iusto non doloremque vero cum dolorem inventore aut excepturi placeat 33 quidem harum.
                    </div>

                    <form className={styles.contactform} action="">
                        <label htmlFor="Email">Email Address</label>
                        <input type="email" placeholder='Email Address' id='Email' />
                        <button type='button'>Submit</button>
                    </form>
                </div>
                <div className={styles.detaildiv}>


                    
                    <div className={styles.companyinfo}>

                        <img src={codetechlogo} style={{ width: "50%", height: "33.33%", paddingLeft: "8%" }} alt="" />
                        <div className={styles.ext}>
                            Copyright © 2022. Pirotan Technologies Pvt Ltd. All rights reserved.
                        </div>
                        <div className={styles.socialmedia}>
                            {
                                platforms.map((data, index) => {
                                    return (
                                        <div className={styles.socialmediablocks} key={index}>
                                            <img className={styles.socialplatforms} src={data} alt="" /></div>)
                                })}
                        </div>
                    </div>



                    <div className={styles.quicklinks}>
                        <span>Quick Links</span>
                        <img src={Line} alt="" />
                        {linkdata.map((data, index) => {
                            return <div key={index}>{data}</div>
                        })}
                    </div>


                    <div className={styles.otherresource}>
                        <span>Other Resources</span>
                        <img src={Line} alt="" />
                        {linkdata.map((data, index) => {
                            return <div key={index}>{data}</div>
                        })}
                    </div>


                    <div className={styles.contactaddr}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span>Contact Us</span>
                            <img className={styles.line} src={Line} alt="" />
                        </div>
                        <div className={styles.detailaddr}>
                           
                        
                            <span><div className={styles.icon}><img className={styles.icon} src={iLocation} alt="" /> </div>Address</span>
                            <span><div className={styles.icon}><img className={styles.icon} src={iMessage} alt="" /> </div>Email</span>
                            <span><div className={styles.icon}><img className={styles.icon} src={iCall} alt="" /> </div>+111222333</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;