import React from 'react';

import HeaderMobile from '../../header/vistamobile/HeaderMobile'
import CentroMobile from '../../centro/vistamobile/CentroMobile'
import MenuMobile from '../../MenuMobile'
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