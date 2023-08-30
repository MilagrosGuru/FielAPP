import React from 'react';
import styles from "../../../Assests/css/pages/welcome/userwelcome.module.scss";


function UserWelcome (){
    let usuario = localStorage.getItem('username');
    const UsuarioMayusculas = usuario.toUpperCase();
    return(
        <span className={styles.username}>{UsuarioMayusculas}</span>
    );
}
export default UserWelcome;