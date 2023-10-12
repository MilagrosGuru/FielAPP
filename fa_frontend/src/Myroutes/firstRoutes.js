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

import Estadisticas from '../pages/DashboardPartner/CenterStatistics'
import CenterDashboardPartner from '../pages/DashboardPartner/CenterDashboardPartner'
import Awards from '../pages/DashboardPartner/Centerawards'
import Myplan from '../pages/DashboardPartner/Centermyplan'
import Redeem from '../pages/DashboardPartner/Centerredeem'
import Awardpoints from '../pages/DashboardPartner/Centerawardpoints'

import CompanyProfile from '../pages/DashboardPartner/Centercompanyprofile'
import CenterUsers from '../pages/DashboardPartner/Centerusers'
import CenterClients from '../pages/DashboardPartner/Centerclients'
import CenterHelp from '../pages/DashboardPartner/Centerhelp'
import CenterFollow from '../pages/DashboardPartner/Centerfollow'
import CenterProceeds from '../pages/DashboardPartner/Centerproceeds'
import CenterContactus from '../pages/DashboardPartner/Centercontactus'

import CenterMenu from '../pages/DashboardPartner/Centermenu'
import CenterNotifications from '../pages/DashboardPartner/Centernotifications'
import CenterNetworks from '../pages/DashboardPartner/Centernetworks'
import CenterProfile from '../pages/DashboardPartner/Centerprofile'

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
                    <Route path="/DashboardSocio" element={<DashboardPartner />}>
                        <Route index element={<CenterDashboardPartner />} />
                        <Route path="Estadisticas" element={<Estadisticas />} />
                        <Route path="Premios" element={<Awards />} />
                        <Route path="MiPlan" element={<Myplan />} />
                        <Route path="Redimir" element={<Redeem />} />
                        <Route path="OtorgarPuntos" element={<Awardpoints />} />
                        <Route path="PerfilEmpresa" element={<CompanyProfile />} />
                        <Route path="UsuariosFIEL" element={<CenterUsers />} />
                        <Route path="ClientesFIEL" element={<CenterClients />} />
                        <Route path="Ayuda" element={<CenterHelp />} />
                        <Route path="Siguenos" element={<CenterFollow />} />
                        <Route path="Beneficios" element={<CenterProceeds />} />
                        <Route path="Contactanos" element={<CenterContactus />} />
                        <Route path="Menu" element={<CenterMenu />} />
                        <Route path="Notificaciones" element={<CenterNotifications />} />
                        <Route path="Perfil" element={<CenterProfile />} />
                        <Route path="Redes" element={<CenterNetworks />} />
                    </Route>
                    <Route path="/DashboardCliente" element={<DashboardCustomer />}></Route>
                </Routes>
        </React.Fragment>
    );
}
export default firstRoutes; 