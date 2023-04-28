import React from 'react';

import MediaQuery from 'react-responsive';

import FirstPage from './components/pages/Firstpage/FirstPage'
import FirstPageMobile from './components/pages/Firstpage/FirstPageMobile'
import './Assests/css/variables.css'

function App() {
  return(
      <React.Fragment>
        <MediaQuery minDeviceWidth={1224}>
          <FirstPage/>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <MediaQuery orientation='portrait'>
              <FirstPageMobile/>
          </MediaQuery>
          <MediaQuery orientation='landscape'>
            <FirstPage/>
          </MediaQuery>
        </MediaQuery>
      </React.Fragment>
  );
}
export default App;
