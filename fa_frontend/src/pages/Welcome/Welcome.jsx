import React from 'react';

import StartHeader from '../../components/common/header/StartHeader'

import BtnUpdateYourProfile from "../../components/pages/Welcome/BtnUpdateYourProfile"
import BtnStartNow from"../../components/pages/Welcome/BtnStartNow"
import WelcomeTitle from"../../components/pages/Welcome/WelcomeTitle"
import UserWelcome from"../../components/pages/Welcome/UserWelcome"
import CentralText from"../../components/common/centralText/centralText"

import styles from "../../../src/Assests/css/pages/welcome/welcome.module.scss"

function Welcome()
{
    return(
        <div className="overallContainer">
            <div className="headerContainer">
                <StartHeader />
            </div>
            <div className="centerContainer">
                <div className="leftContainer"></div>
                <div className="center">
                    <main className="contLogin">   
                        <section className={styles.section1}>
                                <WelcomeTitle />
                        </section>
                        <section className={styles.section2}>
                                <UserWelcome/>
                        </section> 
                        <section className={styles.styleText}>
                            <div>
                                <CentralText text={'¡Gracias por preferirnos! Estamos listos para acompañarte en esta nueva aventura'}/>
                            </div>
                        </section>
                        <section className={styles.contButton}>
                            <div className={styles.ContgenButton}>
                                <BtnUpdateYourProfile />
                                <BtnStartNow />
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