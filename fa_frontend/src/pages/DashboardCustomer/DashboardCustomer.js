import React from 'react';
import CentarlText from "../../components/common/centralText/centralText"
import Header from "../../components/common/header/Header"
import LeftCustomer from "../../components/common/laterals/LeftCustomer"
import RightCustomer from "../../components/common/laterals/RightPartner"

import styles from "../../Assests/css/pages/dashboardcustomer/dashboardcustomer.module.scss"

function DashboardCustomer()
{
    return(
        <div className="overallContainer">
            <div className="headerContainer">
                <Header/>
            </div>
            <div className="centerContainer">
                <div className="leftContainer">
                    <LeftCustomer/>
                </div>
                <div className="center">
                    <main className="contLogin">   
                        <section className={styles.contText}>
                            <CentarlText text={'dashboard del cliente'}/>
                        </section>
                    </main>
                </div>
                <div className="rightContainer">
                    <RightCustomer/>
                </div>
            </div>
        </div>
    );
}
export default DashboardCustomer;