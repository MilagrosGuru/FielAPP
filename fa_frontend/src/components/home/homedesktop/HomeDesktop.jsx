import React from 'react';

import Header from '../../../template/home/Header'
import MenuDer from '../../../template/home/homedesktop/MenuDer'
import Centro from '../../../template/home/homedesktop/Centro'
import MenuIzq from '../../../template/home/homedesktop/MenuIzq'
import styles from '../../../css/home/general.module.scss'
class HomeDesktop extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className={styles.contenedorGeneral}>
                    <Header></Header>
                    <div className={styles.contenedorCentral}>
                        <MenuIzq></MenuIzq>
                        <Centro></Centro>
                        <MenuDer></MenuDer>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default HomeDesktop 