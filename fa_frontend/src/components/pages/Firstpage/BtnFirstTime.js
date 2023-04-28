import React from 'react';
import styles from "../../../Assests/css/pages/firstpage/btnfirsttime.module.scss";


class BtnFirstTime extends React.Component{
    render(){
        return(
            <input className={styles.styleButton1} type="button" value="Mi primera vez" />
        );
    }
}
export default BtnFirstTime;