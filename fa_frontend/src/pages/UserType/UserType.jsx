import React from 'react';

import StartHeader from '../../components/common/header/StartHeader'

import BtnPartner from "../../components/pages/UserType/BtnPartner"
import BtnCustomer from"../../components/pages/UserType/BtnCustomer"
import CentralText from"../../components/common/centralText/centralText"

import styles from "../../Assests/css/pages/usertype/usertype.module.scss"

function UserType()
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
                            <CentralText text={'Selecciona la opción que mejor se adapta a tu necesidad'}/>
                        </section>
                        <section className={styles.contButton}>
                            <div className={styles.ContgenButton}>
                                <BtnCustomer />
                                <BtnPartner />
                            </div>
                        </section>
                    </main>
                </div>
                <div className="rightContainer"></div>
            </div>
        </div>
    );
}
export default UserType;