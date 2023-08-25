import React from 'react';
import styles from "../../../Assests/css/pages/login/logintitle.module.scss";


class LoginTitle extends React.Component{
    render(){
        return(
            <h3 className={styles.styleh3}>Ingresa tus datos</h3>
        );
    }
}
export default LoginTitle;