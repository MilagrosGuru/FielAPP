import React from 'react';

import ButtonHeader from '../ButtonHeader'

import btn2 from "../../../Assests/images/btn2.png";
import btn3 from "../../../Assests/images/btn3.png";
import btn4 from "../../../Assests/images/btn4.png";
import styles from "../../../Assests/css/header/mobile/headermobile.module.scss"
import Title from './Title';
class Header extends React.Component{
    render(){
        return(
            <div className={styles.estiloHeaderMobile}>   
                <div className={styles.contenedorEspacio}></div>
                <div className={styles.contenedorBotonesMobile}>
                    <div className={styles.contbotonMobile}>
                        <ButtonHeader src={btn2}></ButtonHeader>
                    </div>
                    <div className={styles.contbotonMobile}>
                        <ButtonHeader src={btn3}></ButtonHeader>
                    </div>
                    <div className={styles.contbotonMobile}>
                        <ButtonHeader src={btn4}></ButtonHeader>
                    </div>
                </div>  
                <div className={styles.contenedorTitulo}>
                    <Title tit={"Seccion Seleccionada"}></Title>
                </div>   
            </div>
        );
    
    }
}
export default Header;