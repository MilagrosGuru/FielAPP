import React from 'react';

import {Link} from "react-router-dom";

import IconMenu from './IconMenu'

import img1 from "../../../Assests/images/Plan.png";
import img2 from "../../../Assests/images/Awards.png";
import img3 from "../../../Assests/images/Redeem.png";
import img4 from "../../../Assests/images/Statistics.png";
import img5 from "../../../Assests/images/tickets.png";

import styles from "../../../Assests/css/common/laterals/leftpartner.module.scss"
import TextsMenuLeft from './TextsMenuLeft';
class LeftPartner extends React.Component{
    render(){
        return(
            <div className={styles.estiloLaterales}>  
                <div className={styles.contmenu}>
                    <div className={`${styles.linea} ${styles.TopSeparation}`}>
                        <div className={styles.conticono}>
                            <IconMenu src={img4}/>
                        </div>
                        <div className={styles.conttexto}>
                            <Link to="Estadisticas" style={{ textDecoration: 'none' }}><TextsMenuLeft txt="Estadísticas" id="estadistica"/></Link>
                        </div>
                    </div>
                    <div className={styles.linea}>
                        <div className={styles.conticono}>
                            <IconMenu src={img3}/>
                        </div>
                        <div className={styles.conttexto}>
                            <Link to="Redimir" style={{ textDecoration: 'none' }}><TextsMenuLeft txt="Redimir" id="redimir"/></Link>
                        </div>
                    </div>
                    <div className={styles.linea}>
                        <div id="Premios" className={styles.conticono}>
                            <IconMenu src={img2}/>
                        </div>
                        <div className={styles.conttexto}>
                            <Link to="Premios" style={{ textDecoration: 'none' }}><TextsMenuLeft txt="PremiosFIEL" id="premios"/></Link>
                        </div>
                    </div>
                    <div className={styles.linea}>
                        <div className={styles.conticono}>
                            <IconMenu src={img1}/>
                        </div>
                        <div id="Plan" className={styles.conttexto}>
                            <Link to="MiPlan" style={{ textDecoration: 'none' }}><TextsMenuLeft txt="Mi Plan" id="plan"/></Link>
                        </div>
                    </div>
                    <div className={styles.linea}>
                        <div className={styles.conticono}>
                            <IconMenu src={img5}/>
                        </div>
                        <div id="OtorgarPuntos" className={styles.conttexto}>
                            <Link to="OtorgarPuntos" style={{ textDecoration: 'none' }}><TextsMenuLeft txt="Otorgar PuntosFIEL" id="otorgarpuntos"/></Link>
                        </div>
                    </div>
                </div>    
            </div>
        );
    
    }
}
export default LeftPartner;