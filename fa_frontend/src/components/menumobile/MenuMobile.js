import React from 'react';

import IconoMenuMobile from '../menumobile/IconoMenumobile';

import img1 from "../../Assests/imagenes/Plan.png";
import img2 from "../../Assests/imagenes/Premios.png";
import img3 from "../../Assests/imagenes/Redimir.png";
import img4 from "../../Assests/imagenes/estadísticas.png";

import styles from "../../Assests/css/menumobile/menumobile.module.scss"

class MenuMobile extends React.Component{
    render(){
        return(
            <div className={styles.estiloMenuMobile}>     
                <div className={styles.contbotonesmobile}>
                    <IconoMenuMobile src={img1}/>
                </div>   
                <div className={styles.contbotonesmobile}>
                    <IconoMenuMobile src={img2}/>
                </div> 
                <div className={styles.contbotonesmobile}>
                    <IconoMenuMobile src={img3}/>
                </div> 
                <div className={styles.contbotonesmobile}>
                    <IconoMenuMobile src={img4}/>
                </div> 
            </div>
        );
    
    }
}
export default MenuMobile;