import React from 'react';
import { Routes, Route } from "react-router-dom";

import FirstPage from '../pages/Firstpage/FirstPage'
import Login from '../pages/Login/Login'
import Welcome from '../pages/Welcome/Welcome'
import VerifyEmail from '../pages/VerifyEmail/VerifyEmail'
import ForgotPasswordPage from '../pages/ForgotPasswordPage/ForgotPasswordPage'
import TermsConditionsPage from '../pages/TermsConditionsPage/TermsConditionsPage'
import ActualizarPerfilSocio from '../pages/UpdateProfile/UpdateProfile'
import UserType from '../pages/UserType/UserType'
import DashboardPartner from '../pages/DashboardPartner/DashboardPartner'
import DashboardCustomer from '../pages/DashboardCustomer/DashboardCustomer'
import CreateCompany from '../pages/CreateCompany/CreateCompany'


function firstRoutes() {
    return (
        <React.Fragment>
                <Routes>
                    <Route exact path="/" element={<FirstPage />}></Route>
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/VerificacionEmail" element={<VerifyEmail />}></Route>
                    <Route path="/Bienvenido" element={<Welcome />}></Route>
                    <Route path="/OlvidasteContrasena" element={<ForgotPasswordPage />}></Route>
                    <Route path="/TerminosyCondiciones" element={<TermsConditionsPage />}></Route>
                    <Route path="/ActualizarPerfilSocio/*" element={<ActualizarPerfilSocio />}></Route>
                    <Route path="/TipoUsuario" element={<UserType />}></Route>
                    <Route path="/CrearEmpresa" element={<CreateCompany />}></Route>
                    <Route path="/DashboardSocio" element={<DashboardPartner />}></Route>
                    <Route path="/DashboardCliente" element={<DashboardCustomer />}></Route>
                </Routes>
        </React.Fragment>
    );
}
export default firstRoutes; 