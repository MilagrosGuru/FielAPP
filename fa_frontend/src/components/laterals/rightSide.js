import React from 'react';

import {Link} from "react-router-dom";

import IconMenu from './IconMenu'
import TextsMenu from './TextsMenu';
import Subtitle from './Subtitle';

import img1 from "../../Assests/images/Help.png";
import img2 from "../../Assests/images/Proceeds.png";
import img3 from "../../Assests/images/Closed.png";
import img4 from "../../Assests/images/Icon.png";
import img5 from "../../Assests/images/Follow.png";
import img6 from "../../Assests/images/User.png";
import img7 from "../../Assests/images/MyPlan.png";
import img8 from "../../Assests/images/Points.png";

import styles from "../../Assests/css/laterals/rightside.module.scss"

class RightSide extends React.Component{
    render(){
        return(
            <div className={styles.estiloLaterales}>  
                <div className={styles.contmenu}>
                    <div className={styles.bloques}>
                        <div className={styles.linea}>
                            <div className={styles.contsubtitulo}>
                                <Subtitle txt="Usuarios y Perfiles"/>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconMenu src={img4}/>
                            </div>
                            <div className={styles.conttexto}>
                                <Link to="perfilempresa" style={{ textDecoration: 'none' }}><TextsMenu txt="Perfil de empresa"/></Link>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconMenu src={img6}/>
                            </div>
                            <div className={styles.conttexto}>
                                <Link to="usuariosFIEL" style={{ textDecoration: 'none' }}><TextsMenu txt="Usuarios FIEL"/></Link>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconMenu src={img6}/>
                            </div>
                            <div className={styles.conttexto}>
                                <Link to="clientesFIEL" style={{ textDecoration: 'none' }}><TextsMenu txt="Clientes FIEL"/></Link>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconMenu src={img7}/>
                            </div>
                            <div className={styles.conttexto}>
                                <Link to="miplan" style={{ textDecoration: 'none' }}><TextsMenu txt="Mi Plan"/></Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.bloques}>
                        <div className={styles.linea}>
                            <div className={styles.contsubtitulo}>
                                <Subtitle txt="Enlaces de interés"/>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconMenu src={img1}/>
                            </div>
                            <div className={styles.conttexto}>
                                <Link to="ayuda" style={{ textDecoration: 'none' }}><TextsMenu txt="Ayuda"/></Link>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconMenu src={img5}/>
                            </div>
                            <div className={styles.conttexto}>
                                <Link to="siguenos" style={{ textDecoration: 'none' }}><TextsMenu txt="Siguenos!! FielAPP"/></Link>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconMenu src={img2}/>
                            </div>
                            <div className={styles.conttexto}>
                                <Link to="beneficios" style={{ textDecoration: 'none' }}><TextsMenu txt="Beneficios de FielAPP"/></Link>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.bloques}>
                        <div className={styles.linea}>
                            <div className={styles.contsubtitulo}>
                                <Subtitle txt="Puntos FIEL"/>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconMenu src={img8}/>
                            </div>
                            <div className={styles.conttexto}>
                                <Link to="otorgarpuntos" style={{ textDecoration: 'none' }}><TextsMenu txt="Otorgar puntos FIEL"/></Link>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.bloques}>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconMenu src={img3}/>
                            </div>
                            <div className={styles.conttexto}>
                                <TextsMenu txt="Cerrar Sesión"/>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        );
    
    }
}
export default RightSide;