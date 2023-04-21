import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from '../../header/vistadesktop/Header'

import CenterMenu from '../../centro/desktop/Centermenu'
import CenterNetworks from '../../centro/desktop/Centernetworks'
import CenterNotifications from '../../centro/desktop/Centernotifications'
import CenterProfile from '../../centro/desktop/Centerprofile'

import CenterStatistics from '../../centro/desktop/Centerstatistics'
import CenterRedeem from '../../centro/desktop/Centerredeem'
import CenterAwards from '../../centro/desktop/Centerawards'
import CenterMyplan from '../../centro/desktop/Centermyplan'

import CenterCompanyProfile from '../../centro/desktop/Centercompanyprofile'
import CenterClients from '../../centro/desktop/Centerclients'
import CenterUsers from '../../centro/desktop/Centerusers'
import CenterHelp from '../../centro/desktop/Centerhelp'
import CenterFollow from '../../centro/desktop/Centerfollow'
import CenterProceeds from '../../centro/desktop/Centerproceeds'
import CenterAwardPoints from '../../centro/desktop/Centerawardpoints'

import LeftSide from '../../laterals/leftSide'
import RightSide from '../../laterals/rightSide'
import styles from '../../../Assests/css/views/desktop/desktop.module.scss'
class Desktop extends React.Component{
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                <div className={styles.contenedorGeneral}>
                    <Header/>
                    <div className={styles.contenedorCentral}>
                        <div className={styles.leftcontainer}>
                            <LeftSide/>
                        </div>
                        <div className={styles.centercontainer}>
                                <Routes>
                                    <Route path="/menu" element={<CenterMenu />}></Route>
                                    <Route path="/redes" element={<CenterNetworks />}></Route>
                                    <Route path="/notificaciones" element={<CenterNotifications />}></Route>
                                    <Route path="/perfil" element={<CenterProfile />}></Route>

                                    <Route path="/estadisticas" element={<CenterStatistics />}></Route>
                                    <Route path="/redimir" element={<CenterRedeem />}></Route>
                                    <Route path="/premios" element={<CenterAwards />}></Route>
                                    <Route path="/miplan" element={<CenterMyplan />}></Route>

                                    <Route path="/perfilempresa" element={<CenterCompanyProfile />}></Route>
                                    <Route path="/clientesFIEL" element={<CenterClients />}></Route>
                                    <Route path="/usuariosFIEL" element={<CenterUsers />}></Route>
                                    <Route path="/ayuda" element={<CenterHelp />}></Route>
                                    <Route path="/siguenos" element={<CenterFollow />}></Route>
                                    <Route path="/beneficios" element={<CenterProceeds />}></Route>
                                    <Route path="/otorgarpuntos" element={<CenterAwardPoints />}></Route>
                                </Routes>
                        </div>
                        <div className={styles.rightcontainer}>
                            <RightSide/>
                        </div>
                    </div>
                </div>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
export default Desktop 