import React from 'react';

/*import {Link} from "react-router-dom";*/

import ImageUpdate from './Logo'
import TitleHeader from './TitleHeader'

//import imglogo from "../../../Assests/images/btn2.png";

import styles from "../../../Assests/css/common/header/updateheader.module.scss";

function RegistrationHeader(props)
{
        return(
            <div className={styles.HeaderStyle}>  
                <div className={styles.spacer}>
                    
                </div> 
                <div className={styles.LogoContainer}>
                    <ImageUpdate src={props.imglogo}></ImageUpdate>
                </div>  
                <div className={styles.TitleContainer}>
                    <TitleHeader textProps={props.titleheader}/>
                </div> 
            </div>
        );
    
    }

export default RegistrationHeader;