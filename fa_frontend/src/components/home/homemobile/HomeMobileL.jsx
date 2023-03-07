import React from 'react';

import Header from '../../../template/home/homemobile/HeaderMobile'
import MenuDerL from '../../../template/home/homemobile/MenuDerL'
import CentroL from '../../../template/home/homemobile/CentroL'
import MenuIzqL from '../../../template/home/homemobile/MenuIzqL'
import styles from '../../../css/home/general.module.scss'
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