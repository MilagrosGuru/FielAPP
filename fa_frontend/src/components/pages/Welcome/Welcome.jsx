import React from 'react';
/*import { Route } from "react-router-dom";
import StartHeader from '../../header/vistadesktop/StartHeader'
import CenterWelcomePage from '../Welcome/CenterWelcomePage'
import UpdateProfile from '../UpdateProfile/UpdateProfile';*/

import SecondRoutes from '../../Myroutes/UpdateRoutes'

import styles from "../../../Assests/css/pages/welcome/welcome.module.scss"

class Welcome extends React.Component{
    render(){
        return(
            <React.Fragment>
                <SecondRoutes/>
                {/*<BrowserRouter>
                    <Routes>
                        <Route path="*" element={<secondRoutes/>} /> */}
                        {/*<Route path="/Bienvenido" element={<CenterWelcomePage/>} />
                        <Route path="/ActualizarPerfil" element={<UpdateProfile />} />*/}
                    {/*</Routes>
                </BrowserRouter>*/}
            </React.Fragment>
        );
    }
}
export default Welcome;