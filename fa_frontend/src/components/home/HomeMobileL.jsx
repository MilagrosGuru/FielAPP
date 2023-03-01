import React from 'react';

import Header from '../template/home/Header'
import MenuDerL from '../template/home/MenuDerL'
import CentroL from '../template/home/CentroL'
import MenuIzqL from '../template/home/MenuIzqL'
import styles from '../assets/css/general.module.scss'
class HomeDesktopL extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className={styles.contenedorGeneral}>
                    <Header></Header>
                    <div className={styles.contenedorCentral}>
                        <MenuIzqL></MenuIzqL>
                        <CentroL></CentroL>
                        <MenuDerL></MenuDerL>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default HomeDesktopL 