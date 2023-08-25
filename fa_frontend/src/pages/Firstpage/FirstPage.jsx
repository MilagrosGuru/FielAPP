import React from 'react';
import { Link } from 'react-router-dom';

import BtnFirstTime from "../../components/pages/Firstpage/BtnFirstTime"
import BtnHaveAccount from"../../components/pages/Firstpage/BtnHaveAccount"
import FirstPageText from"../../components/pages/Firstpage/FirstPageText"

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
                            <FirstPageText />
                        </section>
                        <section className={styles.contButton}>
                            <div className={styles.ContgenButton}>
                                <Link to="Login" style={{ textDecoration: 'none' }}><BtnFirstTime /></Link>
                                <Link to="Login" style={{ textDecoration: 'none' }}><BtnHaveAccount /></Link>
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