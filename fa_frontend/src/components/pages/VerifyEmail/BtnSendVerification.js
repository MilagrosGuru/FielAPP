import React from 'react';
import styles from "../../../Assests/css/pages/verifyemail/btnsendverification.module.scss";

import {sendEmailVerification} from "firebase/auth";


function  BtnSendVerification({myUser, onVerificationComplete}){
    
    const handleClick = () => {
        console.log(myUser);
        sendEmailVerification(myUser)
        .then(() => {
            console.log('Verificación enviada. Revise su correo y haga clic en el enlace para completar el registro.');
            const verificationOk = 1;
            onVerificationComplete(verificationOk);
        })
        .catch(() => {
            console.log('Error en envío de verificación')
            const verificationNO = 0;
            onVerificationComplete(verificationNO);
        });
    };
    return(
        <button className="styleButtonPurple" onClick={handleClick}>
            <span className={styles.textButton}>Confirmar Correo</span>
        </button>
    );
}
export default  BtnSendVerification;