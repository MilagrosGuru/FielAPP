import React from 'react';

import HeaderMobile from '../../../template/home/homemobile/HeaderMobile'
import CentroMobile from '../../../template/home/homemobile/CentroMobile'
import MenuMobile from '../../../template/home/homemobile/MenuMobile'
import styles from '../../../Assests/css/home/general.module.scss'
class HomeMobile extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className={styles.contenedorGeneral}>
                    <div className={styles.contenedorGeneralMobile}>
                        <HeaderMobile></HeaderMobile>
                        <CentroMobile></CentroMobile>
                        <MenuMobile></MenuMobile>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}
export default HomeMobile 