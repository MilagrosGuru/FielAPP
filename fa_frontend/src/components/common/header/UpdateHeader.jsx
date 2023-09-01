import React from 'react';

/*import {Link} from "react-router-dom";*/

import ImageUpdate from './Logo'
import TitleHeader from './TitleHeader'

import imglogo from "../../../Assests/images/btn2.png";

import styles from "../../../Assests/css/common/header/updateheader.module.scss";

function UpdateHeader()
{
        const titleheader = "Actualizar Perfil";
        return(
            <div className={styles.HeaderStyle}>  
                <div className={styles.spacer}>
                    
                </div> 
                <div className={styles.LogoContainer}>
                    <ImageUpdate src={imglogo}></ImageUpdate>
                </div>  
                <div className={styles.TitleContainer}>
                    <TitleHeader textProps={titleheader}/>
                </div> 
            </div>
        );
    
    }

export default UpdateHeader;