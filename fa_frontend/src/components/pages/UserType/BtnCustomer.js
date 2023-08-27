import React from 'react';
import styles from "../../../Assests/css/pages/usertype/btncustomer.module.scss";


class BtnCustomer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <span className={styles.textButton}>CLIENTE <span>FIEL</span> </span>
            </React.Fragment>
        );
    }
}
export default BtnCustomer;