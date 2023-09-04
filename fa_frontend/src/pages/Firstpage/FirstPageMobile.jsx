import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartHeader from '../../components/common/header/StartHeader'
import FirstPage from './FirstPage'
import Login from '../Login/Login'
import Welcome from '../Welcome/Welcome'
import VerifyEmail from '../VerifyEmail/VerifyEmail'

import styles from "../../../src/Assests/css/pages/firstpage/firstpagemobil.module.scss"

class FirstPageMobile extends React.Component{
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                <div className={styles.contenedorGeneral}>
                    <div className={styles.contenedorGeneralMobile}>
                        <StartHeader/>
                        <Routes>
                            <Route path="/" element={<FirstPage />}></Route>
                            <Route path="/Login" element={<Login />}></Route>
                            <Route path="/Bienvenida" element={<Welcome />}></Route>
                            <Route path="/VerificacionEmail" element={<VerifyEmail />}></Route>
                        </Routes>
                    </div>
                </div>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
export default FirstPageMobile; 