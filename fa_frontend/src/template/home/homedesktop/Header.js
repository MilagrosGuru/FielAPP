import React from 'react';

import Logo from '../../Logo'
import Buscador from '../../Buscador'
import imglogo from "../../../Assests/imagenes/Logo.png";

import styles from "../../../Assests/css/home/homedesktop/header.module.scss";

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
                <div className={styles.contenedorBotonera}></div>

            </div>
        );
    
    }
}
export default Header;