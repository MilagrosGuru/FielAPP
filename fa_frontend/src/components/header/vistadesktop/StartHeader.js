import React from 'react';

import {Link} from "react-router-dom";

import Logo from './Logo'

import imglogo from "../../../Assests/images/Logo.png";

import styles from "../../../Assests/css/header/desktop/startheader.module.scss";

class StartHeader extends React.Component{
    render(){
        return(
            <div className={styles.estiloHeader}>  
                <div className={styles.contenedorLogo}>
                    <Logo src={imglogo}></Logo>
                </div>  
            </div>
        );
    
    }
}
export default StartHeader;