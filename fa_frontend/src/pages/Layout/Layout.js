import React from 'react';

import Header from '../../components/common/header/Header'

import styles from "../../../src/Assests/css/pages/welcome/welcome.module.scss"
import LeftPartner from '../../components/common/laterals/LeftPartner';
import RightPartner from '../../components/common/laterals/RightPartner';

function Layout({children})
{
    return(
        <div className="overallContainer">
            <div className="headerContainer">
                <Header />
            </div>
            <div className="centerContainer">
                <div className="leftContainer">
                    <LeftPartner/>
                </div>
                <div className="center">
                    <main className="contCenter">   
                        {children}
                    </main>
                </div>
                <div className="rightContainer">
                    <RightPartner/>
                </div>
            </div>
        </div>
    );
}
export default Layout;