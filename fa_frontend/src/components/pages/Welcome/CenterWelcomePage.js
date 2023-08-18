import React from 'react';
import {Link } from 'react-router-dom';


import BtnUpdateYourProfile from "../Welcome/BtnUpdateYourProfile"
import BtnStartNow from"../Welcome/BtnStartNow"

import styles from "../../../Assests/css/pages/welcome/centerwelcomepage.module.scss"

function CenterWelcomePage()
{
    /*const updateprofile = () =>{
        console.log("aqui en update");
    };
    const startnow = () =>{
        console.log("aqui en start");
    };*/
    let usuario = localStorage.getItem('username');
    const UsuarioMayusculas = usuario.toUpperCase();
    console.log(usuario);
    return(
        <main className={styles.contWelcome}>  
            <section className={styles.textWelcome}>
                <span>Bienvenido,</span>
            </section>
            <section className={styles.username}>
                {UsuarioMayusculas} 
            </section> 
            <section className={styles.contText}>
                <p>¡Por ser nuestro gran SocioFIEL queremos invitarte a cumplir la gran meta de fidelizar a tus valiosos clientes! Ingresa y logremos grandes objetivos juntos!!.</p>
            </section>
            <section className={styles.contButton}>
                <div className={styles.ContgenButton}>
                    <Link to="ActualizarPerfilSocio" style={{ textDecoration: 'none' }}><BtnUpdateYourProfile /></Link>
                    <Link to="Login" style={{ textDecoration: 'none' }}><BtnStartNow /></Link>
                </div>
            </section>
        </main>
    );
}
export default CenterWelcomePage;