import React from 'react';
import styles from "../../../Assests/css/pages/welcome/btnstartnow.module.scss";


class BtnStartNow extends React.Component{
    render(){
        return(
            <input className={styles.styleButton2} type="button" value="Inicia ahora" />
        );
    }
}
export default BtnStartNow;