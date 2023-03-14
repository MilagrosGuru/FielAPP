import React from 'react';

import MediaQuery from 'react-responsive';

import Desktop from './components/vistas/vistadesktop/Desktop';
import Mobile from './components/vistas/vistamobile/Mobile';

function App() {
  return(
      <React.Fragment>
        <MediaQuery minDeviceWidth={1224}>
          <Desktop/>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <MediaQuery orientation='portrait'>
              <Mobile/>
          </MediaQuery>
          <MediaQuery orientation='landscape'>
            <Desktop/>
          </MediaQuery>
        </MediaQuery>
      </React.Fragment>
  );
}
export default App;
