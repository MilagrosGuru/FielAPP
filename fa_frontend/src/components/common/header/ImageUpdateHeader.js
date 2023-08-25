import React from 'react';
import styles from "../../../Assests/css/header/desktop/logo.module.scss";


class LogoUpdate extends React.Component{
    render(){
        return(
            <div className={styles.logo}>  
                <img src={this.props.src} alt="LogoUpdate"></img>      
            </div>
        );
    }
}
export default LogoUpdate;