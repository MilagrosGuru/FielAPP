import React from 'react';
import styles from "../../../Assests/css/pages/login/buttongoogle.module.scss";


class ButtonGoogle extends React.Component{
    render(){
        return(
            <div className={styles.logo}>  
                <img src={this.props.src} alt="Google"></img>      
            </div>
        );
    }
}
export default ButtonGoogle;