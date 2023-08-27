import React from 'react';
import {useNavigate} from 'react-router-dom';

import StartHeader from '../../components/common/header/StartHeader'

import BtnPartner from "../../components/pages/UserType/BtnPartner"
import BtnCustomer from"../../components/pages/UserType/BtnCustomer"
import UserTypeText from"../../components/pages/UserType/UserTypeText"

import styles from "../../Assests/css/pages/usertype/usertype.module.scss"

function UserType()
{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/CreaEmpresa"); 
    };
    const handleClick2 = () => {
        /*navigate("/DashboardCliente"); */
        console.log("es un cliente fiel");
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
                        <section className={styles.contText}>
                            <UserTypeText />
                        </section>
                        <section className={styles.contButton}>
                            <div className={styles.ContgenButton}>
                                <button className="styleButtonWhite" onClick={handleClick2}><BtnCustomer /></button>
                                <button className="styleButtonWhite" onClick={handleClick}><BtnPartner /></button>
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