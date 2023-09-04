import React from 'react';

import BtnFirstTime from "../../components/pages/Firstpage/BtnFirstTime"
import BtnHaveAccount from"../../components/pages/Firstpage/BtnHaveAccount"
import CentarlText from"../../components/common/centralText/centralText"

import StartHeader from '../../components/common/header/StartHeader'

import styles from "../../../src/Assests/css/pages/firstpage/firstpage.module.scss"

function FirstPage()
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
                        <section className={styles.contText}>
                            <CentarlText text={'¡Con Fiel App, fideliza a tus clientes y haz crecer tu negocio de manera fácil y efectiva, a la vez que puedes ganar increibles premios!'}/>
                        </section>
                        <section className={styles.contButton}>
                            <div className={styles.ContgenButton}>
                                <BtnFirstTime />
                                <BtnHaveAccount />
                            </div>
                        </section>
                    </main>
                </div>
                <div className="rightContainer"></div>
            </div>
        </div>
    );
}
export default FirstPage;