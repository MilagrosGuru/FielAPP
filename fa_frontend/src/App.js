import React from 'react';

import MediaQuery from 'react-responsive';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Assests/css/variables.css'
import './Assests/css/global.css'

import RoutesPage from './pages/RoutesPage/RoutesPage'
import FirstPageMobile from './pages/Firstpage/FirstPageMobile'


function App() {
  return(
     <React.Fragment>
        <MediaQuery minDeviceWidth={1224}>
          <RoutesPage/>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <MediaQuery orientation='portrait'>
              <FirstPageMobile/>
          </MediaQuery>
          <MediaQuery orientation='landscape'>
            <RoutesPage/>
          </MediaQuery>
        </MediaQuery>
  </React.Fragment>
  );
}
export default App;
