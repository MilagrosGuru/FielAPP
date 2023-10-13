import React from 'react';
import Logo from '../../components/pages/DashboardPartner/Partnerlogo'
import Companyname from '../../components/pages/DashboardPartner/Partnername'
import Username from '../../components/pages/DashboardPartner/Customername'
import CentralText from '../../components/common/centralText/centralText'
import img from '../../Assests/images/partnerlogo.png'
import styles from "../../Assests/css/pages/dashboardpartner/centerdashboardpartner.module.scss"

function CenterDashboardPartner() {
    const nombreEmpresa = localStorage.getItem('companyname').toUpperCase();
    const nombreUsuario = localStorage.getItem('username').toUpperCase();
    return (
        <>
            <div className={styles.up}>
                <div className={styles.logo}>
                    <Logo src={img} />
                </div>
                <div className={styles.names}>
                    <div className={styles.companyname}>
                        <Companyname name={nombreEmpresa} />
                    </div>
                    <div className={styles.username}>
                        <Username name={nombreUsuario} />
                    </div>
                </div>
            </div>
            <div className={styles.down}>
                <div className={styles.title}>
                    <CentralText text="BIENVENIDOS SOCIO" customStyles={true} delimiter=" " />
                </div>
            </div>
        </>
    );
}

export default CenterDashboardPartner;