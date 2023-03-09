import React from 'react';
import styles from "../../../Assests/css/home/homedesktop/laterales.module.scss"
class Laterales extends React.Component{
    render(){
        return(
            <div className={styles.estiloLaterales}>  
                <div className={styles.contmenu}>
                    <div className={styles.conticono}> </div>
                    <div className={styles.conttexto}> </div>
                </div>    
            </div>
        );
    
    }
}
export default Laterales;