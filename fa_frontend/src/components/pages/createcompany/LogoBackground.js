import React from 'react';
import styles from "../../../Assests/css/pages/createcompany/logobackground.module.scss";


class LogoBackground extends React.Component{
    render(){
        return(
            <div className={styles.logostyle}>  
                <img src={this.props.src} alt="Logo"></img>     
            </div>
        );
    }
}
export default LogoBackground;