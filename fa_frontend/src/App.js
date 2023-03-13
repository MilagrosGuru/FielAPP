import React from 'react';

import MediaQuery from 'react-responsive';

import Desktop from './templates/vistas/vistadesktop/Desktop';
import Mobile from './templates/vistas/vistamobile/Mobile';
import Landscape from './templates/vistas/vistamobile/Landscape';

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
              <Landscape/>
          </MediaQuery>
        </MediaQuery>
      </React.Fragment>
  );
}
export default App;
