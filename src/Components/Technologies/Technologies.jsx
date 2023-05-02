import React from 'react'
import Line from '../../assets/line.svg'
import styles from './Technologies.module.css'
import iSwift from '../../assets/image-swiftUi.svg'
import iFlutter from '../../assets/image-flutter.svg'
import iHtml from '../../assets/image-html.svg'
import iKotlin from '../../assets/image-kotlin.svg'
import iReact from '../../assets/image-react.svg'
const techImgData = [
  {name: "React", photo: iReact},
  {name: "HTML/CSS", photo: iHtml},
  {name: "Kotlin/Java", photo: iKotlin},
  {name: "Swift/SwiftUI", photo: iSwift},
  {name: "Flutter", photo: iFlutter}
]
const Technologies = () => {
    return (
        <>
         <div className={styles.main}>
          <div className={styles.headername}>
          <div>Technologies</div>
           <img src={Line} alt="" />
          </div>
          <div className={styles.technologies}>
            {techImgData.map((data, i)=>{
                return(
                  <div className={styles.techBlock} key={i}>
              <img src={data.photo} alt="" />
              <span>{data.name}</span>
            </div>
                )

            })}
          </div>
        </div>
        </>
      )
}

export default Technologies;