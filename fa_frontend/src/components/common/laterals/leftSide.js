import React from 'react';

import {Link} from "react-router-dom";

import IconMenu from './IconMenu'

import img1 from "../../Assests/images/Plan.png";
import img2 from "../../Assests/images/Awards.png";
import img3 from "../../Assests/images/Redeem.png";
import img4 from "../../Assests/images/Statistics.png";

import styles from "../../Assests/css/laterals/leftside.module.scss"
import TextsMenuLeft from './TextsMenuLeft';
class LeftSide extends React.Component{
    render(){
        return(
            <div className={styles.estiloLaterales}>  
                <div className={styles.contmenu}>
                    <div className={styles.linea}>
                        <div className={styles.conticono}>
                            <IconMenu src={img4}/>
                        </div>
                        <div className={styles.conttexto}>
                            <Link to="estadisticas" style={{ textDecoration: 'none' }}><TextsMenuLeft txt="Estadísticas" id="estadistica"/></Link>
                        </div>
                    </div>
                    <div className={styles.linea}>
                        <div className={styles.conticono}>
                            <IconMenu src={img3}/>
                        </div>
                        <div className={styles.conttexto}>
                            <Link to="redimir" style={{ textDecoration: 'none' }}><TextsMenuLeft txt="Redimir" id="redimir"/></Link>
                        </div>
                    </div>
                    <div className={styles.linea}>
                        <div id="Pemios" className={styles.conticono}>
                            <IconMenu src={img2}/>
                        </div>
                        <div className={styles.conttexto}>
                            <Link to="premios" style={{ textDecoration: 'none' }}><TextsMenuLeft txt="Premios FIEL" id="premios"/></Link>
                        </div>
                    </div>
                    <div className={styles.linea}>
                        <div className={styles.conticono}>
                            <IconMenu src={img1}/>
                        </div>
                        <div id="Plan" className={styles.conttexto}>
                            <Link to="miplan" style={{ textDecoration: 'none' }}><TextsMenuLeft txt="Mi Plan" id="plan"/></Link>
                        </div>
                    </div>
                    <div className={styles.linea}>
                        <div className={styles.conticono}>
                            <IconMenu src={img1}/>
                        </div>
                        <div id="Login" className={styles.conttexto}>
                            <Link to="Login" style={{ textDecoration: 'none' }}><TextsMenuLeft txt="Login" id="login"/></Link>
                        </div>
                    </div>
                </div>    
            </div>
        );
    
    }
}
export default LeftSide;