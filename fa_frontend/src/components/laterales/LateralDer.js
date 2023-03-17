import React from 'react';

import IconoMenu from './IconoMenu'
import TextosMenu from './TextosMenu';
import Subtitulo from './Subtitulo';

import img1 from "../../Assests/imagenes/Ayuda.png";
import img2 from "../../Assests/imagenes/Beneficios.png";
import img3 from "../../Assests/imagenes/cerrar.png";
import img4 from "../../Assests/imagenes/Icono.png";
import img5 from "../../Assests/imagenes/Siguenos.png";
import img6 from "../../Assests/imagenes/Usuario.png";
import img7 from "../../Assests/imagenes/MiPlan.png";
import img8 from "../../Assests/imagenes/Puntos.png";

import styles from "../../Assests/css/laterales/lateralDer.module.scss"

class LateralDer extends React.Component{
    render(){
        return(
            <div className={styles.estiloLaterales}>  
                <div className={styles.contmenu}>
                    <div className={styles.bloques}>
                        <div className={styles.linea}>
                            <div className={styles.contsubtitulo}>
                                <Subtitulo txt="Usuarios y Perfiles"/>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconoMenu src={img4}/>
                            </div>
                            <div className={styles.conttexto}>
                                <TextosMenu txt="Perfil de empresa"/>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconoMenu src={img6}/>
                            </div>
                            <div className={styles.conttexto}>
                                <TextosMenu txt="Usuarios FIEL"/>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconoMenu src={img6}/>
                            </div>
                            <div className={styles.conttexto}>
                                <TextosMenu txt="Clientes FIEL"/>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconoMenu src={img7}/>
                            </div>
                            <div className={styles.conttexto}>
                                <TextosMenu txt="Mi Plan"/>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.bloques}>
                        <div className={styles.linea}>
                            <div className={styles.contsubtitulo}>
                                <Subtitulo txt="Enlaces de interés"/>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconoMenu src={img1}/>
                            </div>
                            <div className={styles.conttexto}>
                                <TextosMenu txt="Ayuda"/>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconoMenu src={img5}/>
                            </div>
                            <div className={styles.conttexto}>
                                <TextosMenu txt="Siguenos!! FielAPP"/>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconoMenu src={img2}/>
                            </div>
                            <div className={styles.conttexto}>
                                <TextosMenu txt="Beneficios de usar FielAPP"/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.bloques}>
                        <div className={styles.linea}>
                            <div className={styles.contsubtitulo}>
                                <Subtitulo txt="Puntos FIEL"/>
                            </div>
                        </div>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconoMenu src={img8}/>
                            </div>
                            <div className={styles.conttexto}>
                                <TextosMenu txt="Otorgar puntos FIEL"/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.bloques}>
                        <div className={styles.linea}>
                            <div className={styles.conticono}>
                                <IconoMenu src={img3}/>
                            </div>
                            <div className={styles.conttexto}>
                                <TextosMenu txt="Cerrar Sesión"/>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        );
    
    }
}
export default LateralDer;