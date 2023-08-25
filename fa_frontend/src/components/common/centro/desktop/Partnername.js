import React from 'react';

import styles from "../../../Assests/css/centro/desktop/partnername.module.scss";


class PartnerName extends React.Component{
    render(){
        return(
            <div className={styles.name}>  
                <p> {this.props.name} </p>   
            </div>
        );
    }
}
export default PartnerName;