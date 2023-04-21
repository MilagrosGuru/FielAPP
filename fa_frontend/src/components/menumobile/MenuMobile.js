import React from 'react';

import IconMenuMobile from '../menumobile/IconMenumobile';

import img1 from "../../Assests/images/Plan.png";
import img2 from "../../Assests/images/Awards.png";
import img3 from "../../Assests/images/Redeem.png";
import img4 from "../../Assests/images/Statistics.png";

import styles from "../../Assests/css/menumobile/menumobile.module.scss"

class MenuMobile extends React.Component{
    render(){
        return(
            <div className={styles.estiloMenuMobile}>     
                <div className={styles.contbotonesmobile}>
                    <IconMenuMobile src={img1}/>
                </div>   
                <div className={styles.contbotonesmobile}>
                    <IconMenuMobile src={img2}/>
                </div> 
                <div className={styles.contbotonesmobile}>
                    <IconMenuMobile src={img3}/>
                </div> 
                <div className={styles.contbotonesmobile}>
                    <IconMenuMobile src={img4}/>
                </div> 
            </div>
        );
    
    }
}
export default MenuMobile;