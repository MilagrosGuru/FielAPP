import React from 'react';
import styles from "../../../Assests/css/pages/firstpage/btnhaveaccount.module.scss";


class BtnHaveAccount extends React.Component{
    render(){
        return(
            <input className={styles.styleButton2} type="button" value="Ya tengo una cuenta" />
        );
    }
}
export default BtnHaveAccount;