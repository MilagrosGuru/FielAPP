import React from 'react';

import styles from "../../../Assests/css/common/header/buttonheader.module.scss";


class BotonHeader extends React.Component{
    render(){
        return(
            <div className={styles.botonheader}>
                <img src={this.props.src} alt="boton"></img>  
            </div>
        );
    }
}
export default BotonHeader;