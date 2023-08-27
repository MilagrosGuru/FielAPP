import React from 'react';
import { Routes, Route } from "react-router-dom";

import ActualizarPerfilSocio from '../pages/UpdateProfile/UpdateProfile'

function secondRoutes() {
    return (
        <React.Fragment>
                <Routes>
                    <Route path="/ActualizarPerfilSocio/*" element={<ActualizarPerfilSocio />}></Route>
                </Routes>
        </React.Fragment>
    );
}
export default secondRoutes; 