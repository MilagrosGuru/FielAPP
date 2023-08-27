import React from 'react';
import styles from "../../../Assests/css/pages/usertype/btncustomer.module.scss";


class BtnCustomer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <button className="styleButtonWhite">
                    <span className={styles.textButton}>CLIENTE <span>FIEL</span> </span>
                </button>
            </React.Fragment>
        );
    }
}
export default BtnCustomer;