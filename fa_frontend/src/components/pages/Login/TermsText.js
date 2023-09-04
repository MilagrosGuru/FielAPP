import React from 'react';
import styles from "../../../Assests/css/pages/login/termtext.module.scss";


class TermText extends React.Component{
    render(){
        return(
            <div className={styles.contterms}>
                <p>Al registrarse en FielApp, aceptaras nuestros;<span>Términos y Póliticas de privacidad</span></p>       
            </div>
        );
    }
}
export default TermText;