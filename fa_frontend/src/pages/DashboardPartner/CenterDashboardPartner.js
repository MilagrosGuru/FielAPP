import React from 'react';
import Logo from '../../components/pages/DashboardPartner/Partnerlogo'
import Companyname from '../../components/pages/DashboardPartner/Partnername'
import Username from '../../components/pages/DashboardPartner/Customername'
import CentralText from '../../components/common/centralText/centralText'
import img from '../../Assests/images/partnerlogo.png'
import styles from "../../Assests/css/pages/dashboardpartner/centerdashboardpartner.module.scss"
class centerdashboardpartner extends React.Component{
    render(){
        return(
            <>
                <div className={styles.up}>   
                    <div className={styles.logo}>
                        <Logo src={img}/>
                    </div>
                    <div className={styles.names}>
                        <div className={styles.companyname}>
                            <Companyname name={"NOMBRE EMPRESA"}/>
                        </div>
                        <div className={styles.username}>
                            <Username name={"NOMBRE USUARIO"}/>
                        </div>
                    </div>
                </div>
                <div className={styles.down}>   
                    <div className={styles.title}>
                        <CentralText text={"BIENVENIDOS SOCIO"} customStyles={true}/>
                    </div>
                </div>
            </>
        );
    
    }
}
export default centerdashboardpartner;