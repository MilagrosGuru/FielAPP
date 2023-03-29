import React from 'react';

import {Link} from "react-router-dom";

import Logo from './Logo'
import Buscador from './Buscador'
import BotonHeader from '../BotonHeader'

import imglogo from "../../../Assests/imagenes/Logo.png";
import btn1 from "../../../Assests/imagenes/btn1.png";
import btn2 from "../../../Assests/imagenes/btn2.png";
import btn3 from "../../../Assests/imagenes/btn3.png";
import btn4 from "../../../Assests/imagenes/btn4.png";

import styles from "../../../Assests/css/header/desktop/header.module.scss";

class Header extends React.Component{
    render(){
        return(
            <div className={styles.estiloHeader}>  
                <div className={styles.contenedorLogo}>
                    <Logo src={imglogo}></Logo>
                </div>  
                <div className={styles.contenedorBuscador}>
                    <Buscador></Buscador>
                </div>
                <div className={styles.contenedorBotonera}>
                    <div className={styles.contboton}>
                        <Link to="menu"><BotonHeader src={btn1}/></Link>
                    </div>
                    <div className={styles.contboton}>
                        <Link to="redes"><BotonHeader src={btn2}/></Link>
                    </div>
                    <div className={styles.contboton}>
                        <Link to="notificaciones"><BotonHeader src={btn3}/></Link>
                    </div>
                    <div className={styles.contboton}>
                        <Link to="perfil"><BotonHeader src={btn4}/></Link>
                    </div>
                </div>
            </div>
        );
    
    }
}
export default Header;