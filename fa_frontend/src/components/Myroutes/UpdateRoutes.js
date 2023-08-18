import React from 'react';
import { Routes, Route } from "react-router-dom";

import CenterWelcomePage from '../pages/Welcome/CenterWelcomePage'
import UpdateProfilePartner from '../pages/UpdateProfile/CenterUpdateProfile'
import CenterLogin from '../pages/Login/CenterLogin'

function UpdateRoutes() {
    return (
        <React.Fragment>
                <Routes>
                    <Route path="/" element={<CenterWelcomePage />}></Route>
                    <Route path="/ActualizarPerfilSocio" element={<UpdateProfilePartner />}></Route>
                    <Route path="/Login" element={<CenterLogin />}></Route>
                </Routes>
        </React.Fragment>
    );
}
export default UpdateRoutes;