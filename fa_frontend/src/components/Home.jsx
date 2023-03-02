import React from 'react';

import MediaQuery from 'react-responsive';

import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';
import HomeMobileL from './HomeMobileL';

class MyMediaQuery extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MediaQuery minDeviceWidth={1224}>
                    <HomeDesktop></HomeDesktop>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                    <MediaQuery orientation='portrait'>
                        <HomeMobile></HomeMobile>
                    </MediaQuery>
                    <MediaQuery orientation='landscape'>
                        <HomeMobileL></HomeMobileL>
                    </MediaQuery>
                </MediaQuery>
                <MediaQuery minWidth={1824}>
                    <p>Diseno para una gran pantalla</p>
                </MediaQuery>
            </React.Fragment>
        );
    }
}

export default MyMediaQuery;