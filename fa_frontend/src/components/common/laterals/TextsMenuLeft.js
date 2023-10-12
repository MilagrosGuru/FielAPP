import React from 'react';
import styles from "../../../Assests/css/common/laterals/textsmenuleft.module.scss";


function TextosMenuIzq(props) {
    const texto = props.txt;
    const posicionFIEL = texto.indexOf('FIEL');

    if (posicionFIEL !== -1) {
        const parte1 = texto.slice(0, posicionFIEL);
        const parte2 = texto.slice(posicionFIEL);

        return (
            <div id={props.id} className={styles.textosmenuizq}>
                <p onClick={props.quien}>
                    {parte1} <span className={styles.estiloFIEL}>{parte2}</span>
                </p>
            </div>
        );
    } else {
        return (
            <div id={props.id} className={styles.textosmenuizq}>
                <p onClick={props.quien}>{texto}</p>
            </div>
        );
    }
}

export default TextosMenuIzq;