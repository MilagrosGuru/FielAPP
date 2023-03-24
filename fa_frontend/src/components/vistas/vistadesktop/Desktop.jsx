import React from 'react';
/*import { BrowserRouter, Routes, Route } from "react-router-dom";*/

import Header from '../../header/vistadesktop/Header'
import Center from '../../centro/desktop/Center'
import LateralIzq from '../../laterales/LateralIzq'
import LateralDer from '../../laterales/LateralDer'
import styles from '../../../Assests/css/vistas/desktop.module.scss'
class Desktop extends React.Component{
    render(){
        return(
            <>
                    <div className={styles.contenedorGeneral}>
                        <Header/>
                        <div className={styles.contenedorCentral}>
                            <LateralIzq/>
                            <Center/>
                            <LateralDer/>
                        </div>
                    </div>
            </>
        );
    }
}
export default Desktop 