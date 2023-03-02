import React from 'react';

import Header from '../template/Header'
import CentroMobile from '../template/CentroMobile'
import MenuMobile from '../template/MenuMobile'
import styles from '../css/home/general.module.scss'
class HomeMobile extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className={styles.contenedorGeneral}>
                    <div className={styles.contenedorGeneralMobile}>
                        <Header></Header>
                        <CentroMobile></CentroMobile>
                        <MenuMobile></MenuMobile>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}
export default HomeMobile 