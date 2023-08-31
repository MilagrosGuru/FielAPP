import React from 'react';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import FirstRoutes from '../../Myroutes/firstRoutes'

class RoutesPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<FirstRoutes/>} /> 
                    </Routes>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
export default RoutesPage; 