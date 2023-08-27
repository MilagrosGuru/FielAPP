import React from 'react';
import styles from "../../../Assests/css/pages/welcome/welcometitle.module.scss";


class WelcomeTitle extends React.Component{
    render(){
        return(
            <span className={styles.textWelcome}>Bienvenido,</span>
        );
    }
}
export default WelcomeTitle;