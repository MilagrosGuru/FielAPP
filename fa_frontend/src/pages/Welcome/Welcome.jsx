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
                        <section>
                            <WelcomeTitle />
                        </section>
                        <section>
                            <UserWelcome/>
                        </section> 
                        <section className={styles.styleText}>
                            <CentralText text={'¡Por ser nuestro gran SocioFIEL queremos invitarte a cumplir la gran meta de fidelizar a tus valiosos clientes! Ingresa y logremos grandes objetivos juntos!!.'}/>
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