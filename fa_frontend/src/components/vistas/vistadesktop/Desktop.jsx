import React from 'react';

import Header from '../../header/vistadesktop/Header'
import Centro from '../../centro/Centro'
import LateralIzq from '../../laterales/LateralIzq'
import LateralDer from '../../laterales/LateralDer'
import styles from '../../../Assests/css/vistas/desktop.module.scss'
class HomeDesktop extends React.Component{
    render(){
        return(
            <>
                <div className={styles.contenedorGeneral}>
                    <Header/>
                    <div className={styles.contenedorCentral}>
                        <LateralIzq/>
                        <Centro/>
                        <LateralDer/>
                    </div>
                </div>
            </>
        );
    }
}
export default HomeDesktop 