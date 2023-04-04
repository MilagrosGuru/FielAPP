import React from 'react';

import Partnerlogo from './Partnerlogo';
import Partnername from './Partnername';
import Customername from './Customername';

import img from '../../../Assests/imagenes/partnerlogo.png'
import styles from "../../../Assests/css/centro/desktop/topcenter.module.scss"

class TopCenter extends React.Component{
    render(){
        return(
            <>
            <div className={styles.container}>
                <div className={styles.topContainer}>   
                    <div className={styles.partnerlogo}>
                        <Partnerlogo src={img}/>
                    </div>
                    <div className={styles.partneridentity}>
                        <div className={styles.partnername}>
                            <Partnername name={"NOMBRE EMPRESA"}/>
                            <Customername name={"NOMBRE USUARIO"}/>
                        </div>
                    </div>
                </div>
            </div>

            </>
        );
    
    }
}
export default TopCenter;