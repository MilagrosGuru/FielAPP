import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import StartHeader from '../../header/vistadesktop/StartHeader'
import LoginRoutes from '../../Myroutes/firstRoutes'

/*import CenterFirstPage from './CenterFirstPage'
import CenterLogin from '../Login/CenterLogin'
import CenterWelcomePage from '../Welcome/CenterWelcomePage'
import Welcome from '../Welcome/Welcome'
import VerifyEmail from '../VerifyEmail/VerifyEmail'
/import UpdateProfile from '../UpdateProfile/UpdateProfile'*/


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
                                <Route path="*" element={<LoginRoutes/>} /> 
                                {/* <Route path="/" element={<CenterFirstPage />}></Route>
                                <Route path="/Login" element={<CenterLogin />}></Route>
                                <Route path="/VerificacionEmail" element={<VerifyEmail />}></Route>*/}
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