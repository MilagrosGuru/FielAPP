import React from 'react';

import HeaderMobile from '../../header/vistamobile/HeaderMobile'
import CenterMobile from '../../centro/mobile/CenterMobile'
import MenuMobile from '../../menumobile/MenuMobile'
import styles from '../../../Assests/css/views/mobile/mobil.module.scss'
class HomeMobile extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className={styles.contenedorGeneral}>
                    <div className={styles.contenedorGeneralMobile}>
                        <HeaderMobile></HeaderMobile>
                        <CenterMobile></CenterMobile>
                        <MenuMobile></MenuMobile>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}
export default HomeMobile 