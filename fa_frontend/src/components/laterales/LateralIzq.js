import React from 'react';

import IconoMenu from './IconoMenu'

import img1 from "../../Assests/imagenes/Plan.png";
import img2 from "../../Assests/imagenes/Premios.png";
import img3 from "../../Assests/imagenes/Redimir.png";
import img4 from "../../Assests/imagenes/estadísticas.png";

import styles from "../../Assests/css/laterales/lateralIzq.module.scss"
import TextosMenu from './TextosMenu';
class LateralIzq extends React.Component{
    render(){
        return(
            <div className={styles.estiloLaterales}>  
                <div className={styles.contmenu}>
                    <div className={styles.linea}>
                        <div className={styles.conticono}>
                            <IconoMenu src={img4}/>
                        </div>
                        <div className={styles.conttexto}>
                            <TextosMenu txt="Estadísticas"/>
                        </div>
                    </div>
                    <div className={styles.linea}>
                        <div className={styles.conticono}>
                            <IconoMenu src={img3}/>
                        </div>
                        <div className={styles.conttexto}>
                            <TextosMenu txt="Redimir"/>
                        </div>
                    </div>
                    <div className={styles.linea}>
                        <div className={styles.conticono}>
                            <IconoMenu src={img2}/>
                        </div>
                        <div className={styles.conttexto}>
                            <TextosMenu txt="Premios FIEL"/>
                        </div>
                    </div>
                    <div className={styles.linea}>
                        <div className={styles.conticono}>
                            <IconoMenu src={img1}/>
                        </div>
                        <div className={styles.conttexto}>
                            <TextosMenu txt="Mi Plan"/>
                        </div>
                    </div>
                  
                   
                </div>    
            </div>
        );
    
    }
}
export default LateralIzq;