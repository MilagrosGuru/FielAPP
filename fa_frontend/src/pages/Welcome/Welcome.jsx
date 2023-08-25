import React from 'react';
import {useNavigate} from 'react-router-dom';

import StartHeader from '../../components/common/header/StartHeader'

import BtnUpdateYourProfile from "../../components/pages/Welcome/BtnUpdateYourProfile"
import BtnStartNow from"../../components/pages/Welcome/BtnStartNow"
import WelcomeTitle from"../../components/pages/Welcome/WelcomeTitle"
import WelcomeText from"../../components/pages/Welcome/WelcomeText"

import styles from "../../../src/Assests/css/pages/welcome/welcome.module.scss"

function Welcome()
{
    let usuario = localStorage.getItem('username');
    const UsuarioMayusculas = usuario.toUpperCase();
    const navigate = useNavigate();

    const handleClick = () => {
        // Navega a la ruta deseada cuando se hace clic en el botón
        navigate("/ActualizarPerfilSocio"); 
    };
    const handleClick2 = () => {
        // Navega a la ruta deseada cuando se hace clic en el botón
        navigate("/DashboardSocio"); 
    };
    return(
        <div className="overallContainer">
            <div className="headerContainer">
                <StartHeader />
            </div>
            <div className="centerContainer">
                <div className="leftContainer"></div>
                <div className="center">
                    <main className="contLogin">   
                        <section>
                            <WelcomeTitle />
                        </section>
                        <section className={styles.username}>
                            {UsuarioMayusculas} 
                        </section> 
                        <section>
                            <WelcomeText />
                        </section>
                        <section className={styles.contButton}>
                            <div className={styles.ContgenButton}>
                                <button onClick={handleClick}><BtnUpdateYourProfile /></button>
                                <button onClick={handleClick2}><BtnStartNow /></button>
                            </div>
                        </section>
                    </main>
                </div>
                <div className="rightContainer"></div>
            </div>
        </div>
    );
}
export default Welcome;