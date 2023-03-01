import React from 'react';

import MediaQuery from 'react-responsive';

import HomeDesktop from './home/HomeDesktop';
import HomeMobile from './home/HomeMobile';
import HomeMobileL from './home/HomeMobileL';

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
            </React.Fragment>
        );
    }
}

export default MyMediaQuery;