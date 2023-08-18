import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateHeader from '../../header/vistadesktop/UpdateHeader'
import CenterUpdateProfile from '../UpdateProfile/UpdateProfile'

import styles from "../../../Assests/css/header/desktop/updateheader.module.scss"

class UpdateProfile extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className={styles.contenedorGeneral}>
                    <UpdateHeader/>
                    <div className={styles.contenedorCentral}>
                        <div className={styles.centercontainer}>
                            <Route path="/ActualizarPerfil" element={<CenterUpdateProfile />}></Route>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default UpdateProfile;