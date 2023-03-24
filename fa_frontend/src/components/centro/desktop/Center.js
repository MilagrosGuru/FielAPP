import React from 'react';

import Topcenter from './Topcenter'

import styles from "../../../Assests/css/centro/desktop/centro.module.scss"
class Center extends React.Component{
    render(){
        return(
            <div className={styles.estiloCentro}>   
                <Topcenter/>
            </div>
        );
    
    }
}
export default Center;