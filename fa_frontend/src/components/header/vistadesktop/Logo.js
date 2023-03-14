import React from 'react';
import styles from "../../../Assests/css/header/desktop/logo.module.scss";


class Logo extends React.Component{
    render(){
        return(
            <div className={styles.logo}>  
                <img src={this.props.src} alt="Logo"></img>      
            </div>
        );
    }
}
export default Logo;