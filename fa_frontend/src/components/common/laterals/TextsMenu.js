import React from 'react';
import styles from "../../../Assests/css/common/laterals/textsmenu.module.scss";


function TextosMenu(props) {
    const texto = props.txt;
    const posicionFIEL = texto.indexOf('FIEL');
    const posicionFIEL2 = texto.indexOf('APP');

    if (posicionFIEL !== -1) {
        const parte1 = texto.slice(0, posicionFIEL);
        const parte2 = texto.slice(posicionFIEL);

        return (
            <div id={props.id} className={styles.textosmenu}>
                <p onClick={props.quien}>
                    {parte1} <span className={styles.estiloFIEL}>{parte2}</span>
                </p>
            </div>
        );
    } else {
        if (posicionFIEL2 !== -1) {
            const parte1 = texto.slice(0, posicionFIEL2);
            const parte2 = texto.slice(posicionFIEL2);
    
            return (
                <div id={props.id} className={styles.textosmenu}>
                    <p onClick={props.quien}>
                        {parte1} <span className={styles.estiloFIEL}>{parte2}</span>
                    </p>
                </div>
            );
        } else {
            return (
                <div id={props.id} className={styles.textosmenu}>
                    <p onClick={props.quien}>{texto}</p>
                </div>
            );
        }
    }
    
}

export default TextosMenu;