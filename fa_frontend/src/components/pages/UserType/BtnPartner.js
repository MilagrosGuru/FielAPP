import React from 'react';
import styles from "../../../Assests/css/pages/usertype/btnpartner.module.scss";


class BtnPartner extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className={styles.contTextButton}>
                    <span className={styles.textButton1}>ERES EMPRESA</span>
                    <span className={styles.textButton2}>SOCIO <span>FIEL</span> </span>
                </div>
            </React.Fragment>
        );
    }
}
export default BtnPartner;