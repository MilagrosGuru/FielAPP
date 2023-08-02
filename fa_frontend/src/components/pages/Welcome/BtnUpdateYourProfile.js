import React from 'react';
import styles from "../../../Assests/css/pages/welcome/btnupdateyourprofile.module.scss";


class BtnUpdateYourProfile extends React.Component{
    render(){
        return(
            <input className={styles.styleButton1} type="button" value="Actualiza tu perfil" />
        );
    }
}
export default BtnUpdateYourProfile;