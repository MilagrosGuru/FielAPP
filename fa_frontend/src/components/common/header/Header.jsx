import React from 'react';

import {Link} from "react-router-dom";

import Logo from './Logo'
import Search from './search'
import ButtonHeader from './ButtonHeader'

import imglogo from "../../../Assests/images/Logo.png";
import btn1 from "../../../Assests/images/btn1.png";
import btn2 from "../../../Assests/images/btn2.png";
import btn3 from "../../../Assests/images/btn3.png";
import btn4 from "../../../Assests/images/btn4.png";

import styles from "../../../Assests/css/common/header/header.module.scss";

class Header extends React.Component{
    render(){
        return(
            <div className={styles.HeaderStyle}>  
                <div className={styles.LogoContainer}>
                    <Logo src={imglogo}></Logo>
                </div>  
                <div className={styles.SearchContainer}>
                    <Search></Search>
                </div>
                <div className={styles.ButtonsContainer}>
                    <div className={styles.ButtonContainer}>
                        <Link to="menu"><ButtonHeader src={btn1}/></Link>
                    </div>
                    <div className={styles.ButtonContainer}>
                        <Link to="redes"><ButtonHeader src={btn2}/></Link>
                    </div>
                    <div className={styles.ButtonContainer}>
                        <Link to="notificaciones"><ButtonHeader src={btn3}/></Link>
                    </div>
                    <div className={styles.ButtonContainer}>
                        <Link to="perfil"><ButtonHeader src={btn4}/></Link>
                    </div>
                </div>
            </div>
        );
    
    }
}
export default Header;