import React from 'react';

import IconoMenu from '../laterales/IconoMenu'

import img1 from "../../Assests/imagenes/Plan.png";
import img2 from "../../Assests/imagenes/Premios.png";
import img3 from "../../Assests/imagenes/Redimir.png";
import img4 from "../../Assests/imagenes/estadísticas.png";

import styles from "../../Assests/css/laterales/laterales.module.scss"
import TextosMenu from './TextosMenu';
class Laterales extends React.Component{
    render(){
        return(
            <div className={styles.estiloLaterales}>  
                <div className={styles.contmenu}>
                    <div className={styles.conticono}>
                        <IconoMenu src={img4}/>
                        <IconoMenu src={img3}/>
                        <IconoMenu src={img2}/>
                        <IconoMenu src={img1}/>
                    </div>
                    <div className={styles.conttexto}>
                        <TextosMenu txt="Estadisticas"/>
                        <TextosMenu txt="Redimir"/>
                        <TextosMenu txt="Premios FIEL"/>
                        <TextosMenu txt="Mi plan"/>
                    </div>
                </div>    
            </div>
        );
    
    }
}
export default Laterales;