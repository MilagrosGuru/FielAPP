import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartHeader from '../../header/vistadesktop/StartHeader'
import CenterFirstPage from './CenterFirstPage'
import CenterLogin from '../Login/CenterLogin'
import Welcome from '../Welcome/Welcome'
import VerifyEmail from '../VerifyEmail/VerifyEmail'

import styles from "../../../Assests/css/pages/firstpage/firstpage.module.scss"

class FirstPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                <div className={styles.contenedorGeneral}>
                    <StartHeader/>
                    <div className={styles.contenedorCentral}>
                        <div className={styles.centercontainer}>
                            <Routes>
                                <Route path="/" element={<CenterFirstPage />}></Route>
                                <Route path="/Login" element={<CenterLogin />}></Route>
                                <Route path="/Bienvenida" element={<Welcome />}></Route>
                                <Route path="/VerificacionEmail" element={<VerifyEmail />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
                </BrowserRouter>
            </React.Fragment>
            
        );
    
    }
}
export default FirstPage; 