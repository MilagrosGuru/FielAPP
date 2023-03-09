import React from 'react';

import Header from '../../../template/home/homedesktop/Header'
import Centro from '../../../template/home/homedesktop/Centro'
import Laterales from '../../../template/home/homedesktop/Laterales'
import styles from '../../../Assests/css/home/general.module.scss'
class HomeDesktop extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className={styles.contenedorGeneral}>
                    <Header></Header>
                    <div className={styles.contenedorCentral}>
                        <Laterales></Laterales>
                        <Centro></Centro>
                        <Laterales></Laterales>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default HomeDesktop 