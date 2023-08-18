import React from 'react';
import { Routes, Route } from "react-router-dom";

import CenterFirstPage from '../pages/Firstpage/CenterFirstPage'
import CenterLogin from '../pages/Login/CenterLogin'
import Welcome from '../pages/Welcome/Welcome'
import VerifyEmail from '../pages/VerifyEmail/VerifyEmail'

function firstRoutes() {
    return (
        <React.Fragment>
                <Routes>
                    <Route exact path="/" element={<CenterFirstPage />}></Route>
                    <Route path="/Login" element={<CenterLogin />}></Route>
                    <Route path="/VerificacionEmail" element={<VerifyEmail />}></Route>
                    <Route path="/Bienvenido/*" element={<Welcome />}></Route>
                </Routes>
        </React.Fragment>
    );
}
export default firstRoutes;