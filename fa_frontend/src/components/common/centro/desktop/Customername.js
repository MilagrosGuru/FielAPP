import React from 'react';

import styles from "../../../Assests/css/centro/desktop/customername.module.scss";


class CustomerName extends React.Component{
    render(){
        return(
            <div className={styles.name}>  
                <p> {this.props.name} </p>   
            </div>
        );
    }
}
export default CustomerName;