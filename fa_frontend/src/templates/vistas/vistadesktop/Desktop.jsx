import React from 'react';

import Header from '../../../template/home/homedesktop/Header'
import Centro from '../../../template/home/homedesktop/Centro'
import Laterales from '../../../template/home/homedesktop/Laterales'
import styles from '../../../Assests/css/home/general.module.scss'
class HomeDesktop extends React.Component{
    render(){
        return(
            <>
                <div className={styles.contenedorGeneral}>
                    <Header/>
                    <div className={styles.contenedorCentral}>
                        <Laterales/>
                        <Centro/>
                        <Laterales/>
                    </div>
                </div>
            </>
        );
    }
}
export default HomeDesktop 