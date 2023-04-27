import React from 'react';
import { Link } from 'react-router-dom';

import BtnFirstTime from "../Firstpage/BtnFirstTime"
import BtnHaveAccount from"../Firstpage/BtnHaveAccount"

import styles from "../../../Assests/css/pages/firstpage/centerfirstpage.module.scss"

function CenterFirstPage()
{
    return(
        <main className={styles.contLogin}>   
            <section className={styles.contText}>
                <p>¡Con Fiel App, fideliza a tus clientes y haz crecer tu negocio de manera fácil y efectiva, a la vez que puedes ganar increibles premios!</p>
            </section>
            <section className={styles.contButton}>
                <div className={styles.ContgenButton}>
                    <Link to="Login" style={{ textDecoration: 'none' }}><BtnFirstTime /></Link>
                    <Link to="Login" style={{ textDecoration: 'none' }}><BtnHaveAccount /></Link>
                </div>
            </section>
        </main>
    );
}
export default CenterFirstPage;