import React from 'react';
import styles from "../../../Assests/css/centro/desktop/partnerlogo.module.scss";


class PartnerLogo extends React.Component{
    render(){
        return(
            <div className={styles.logo}>  
                <img src={this.props.src} alt="Logo"></img>      
            </div>
        );
    }
}
export default PartnerLogo;