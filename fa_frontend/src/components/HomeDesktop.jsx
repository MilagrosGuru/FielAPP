import React from 'react';

import Header from '../template/Header'
import MenuDer from '../template/MenuDer'
import Centro from '../template/Centro'
import MenuIzq from '../template/MenuIzq'
import styles from '../css/home/general.module.scss'
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