import React from 'react';

/*import {Link} from "react-router-dom";*/

import Logo from './Logo'

import imglogo from "../../../Assests/images/Logo.png";

import styles from "../../../Assests/css/common/header/startheader.module.scss";

class StartHeader extends React.Component{
    render(){
        return(
            <div className={styles.HeaderStyle}>  
                <div className={styles.LogoContainer}>
                    <Logo src={imglogo}></Logo>
                </div>  
            </div>
        );
    
    }
}
export default StartHeader;