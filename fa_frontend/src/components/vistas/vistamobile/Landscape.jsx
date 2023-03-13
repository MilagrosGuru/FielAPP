import React from 'react';

/*import Header from '../../../template/home/homemobile/HeaderMobile'*/
import Header from '../../header/vistadesktop/Header'
import Laterales from '../../laterales/Laterales'
import Centro from '../../centro/Centro'
import styles from '../../../Assests/css/home/general.module.scss'
class HomeDesktopL extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className={styles.contenedorGeneral}>
                    <Header></Header>
                    <div className={styles.contenedorCentral}>
                        <Laterales/>
                        <Centro/>
                        <Laterales/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default HomeDesktopL 