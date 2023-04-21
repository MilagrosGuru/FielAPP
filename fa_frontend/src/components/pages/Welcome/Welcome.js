import React from 'react';

import styles from "../../../Assests/css/centro/desktop/centermenu.module.scss"
class Welcome extends React.Component{
    render(){
        return(
            <div className={styles.estiloCentro}>   
                Página de Bienvenida
            </div>
        );
    
    }
}
export default Welcome;