import React from 'react';

import Header from '../../header/vistadesktop/Header'
import Centro from '../../centro/Centro'
import Laterales from '../../laterales/Laterales'
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