import React from 'react';
import styles from "../../../Assests/css/pages/buttonfacebook.module.scss";


class ButtonFacebook extends React.Component{
    render(){
        return(
            <div className={styles.logo}>  
                <img src={this.props.src} alt="Facebook"></img>      
            </div>
        );
    }
}
export default ButtonFacebook;