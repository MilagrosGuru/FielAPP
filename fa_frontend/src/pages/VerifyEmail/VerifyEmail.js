import React from 'react';

import styles from "../../../src/Assests/css/pages/verifyemail/verifyemail.module.scss"
class VerifyEmail extends React.Component{
    render(){
        return(
            <div className={styles.estiloCentro}>   
                Página de verificacion de correo
                se ha enviado un link de verificacion a su correo registrado por favor reviselo para continuar con el registro.
            </div>
        );
    
    }
}
export default VerifyEmail; 