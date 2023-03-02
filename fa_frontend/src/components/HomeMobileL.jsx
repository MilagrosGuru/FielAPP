import React from 'react';

import Header from '../template/Header'
import MenuDerL from '../template/MenuDerL'
import CentroL from '../template/CentroL'
import MenuIzqL from '../template/MenuIzqL'
import styles from '../css/home/general.module.scss'
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