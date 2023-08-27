import React from 'react';
import styles from "../../../Assests/css/pages/welcome/welcometext.module.scss";


class WelcomeText extends React.Component{
    render(){
        return(
            <p className={styles.contText}>¡Por ser nuestro gran SocioFIEL queremos invitarte a cumplir la gran meta de fidelizar a tus valiosos clientes! Ingresa y logremos grandes objetivos juntos!!.</p>
        );
    }
}
export default WelcomeText;