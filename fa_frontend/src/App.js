import React from 'react';

import MediaQuery from 'react-responsive';

import LoginDesktop from './components/pages/Login/Login';
import Mobile from './components/view/viewmobile/Mobile';
import './Assests/css/variables.css'

function App() {
  return(
      <React.Fragment>
        <MediaQuery minDeviceWidth={1224}>
          <LoginDesktop/>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <MediaQuery orientation='portrait'>
              <Mobile/>
          </MediaQuery>
          <MediaQuery orientation='landscape'>
            <LoginDesktop/>
          </MediaQuery>
        </MediaQuery>
      </React.Fragment>
  );
}
export default App;
