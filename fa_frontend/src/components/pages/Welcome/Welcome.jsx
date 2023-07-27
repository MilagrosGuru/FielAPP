import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartHeader from '../../header/vistadesktop/StartHeader'
import CenterWelcomePage from '../Welcome/Welcome'

import styles from "../../../Assests/css/pages/welcome/welcome.module.scss"

class Welcome extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className={styles.contenedorGeneral}>
                    <StartHeader/>
                    <div className={styles.contenedorCentral}>
                        <div className={styles.centercontainer}>
                            <Route path="/Bienvenida" element={<CenterWelcomePage />}></Route>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Welcome;