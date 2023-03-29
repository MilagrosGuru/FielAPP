import React from 'react';

import Topcenter from './Topcenter'

import styles from "../../../Assests/css/centro/desktop/centermenu.module.scss"
class Centermenu extends React.Component{
    render(){
        return(
            <div className={styles.estiloCentro}>   
                <Topcenter/>
                Este es el menu
            </div>
        );
    
    }
}
export default Centermenu;