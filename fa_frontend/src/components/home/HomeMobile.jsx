import React from 'react';

import Header from '../template/home/Header'
import CentroMobile from '../template/home/CentroMobile'
import MenuMobile from '../template/home/MenuMobile'
import styles from '../assets/css/general.module.scss'
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