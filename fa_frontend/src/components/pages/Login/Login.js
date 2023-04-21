import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartHeader from '../../header/vistadesktop/StartHeader'
import CenterLogin from '../../centro/desktop/CenterLogin'

import Welcome from '../Welcome/Welcome'

import styles from '../../../Assests/css/views/desktop/LoginDesktop.module.scss';

class LoginDesktop extends React.Component{
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                <div className={styles.contenedorGeneral}>
                    <StartHeader/>
                    <div className={styles.contenedorCentral}>
                        <div className={styles.centercontainer}>
                                <Routes>
                                    <Route path="/" element={<CenterLogin />}></Route>
                                    <Route path="/Bienvenida" element={<Welcome />}></Route>
                                </Routes>
                        </div>
                    </div>
                </div>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
export default LoginDesktop; 