import React from 'react';
import styles from "../../Assests/css/menumobile/iconomenumobile.module.scss";


class IconoMenuMobile extends React.Component{
    render(){
        return(
            <>
                <div className={styles.botonmenu}>
                    <img src={this.props.src} alt="boton"></img>  
                </div>
            </>
        );
    }
}
export default IconoMenuMobile;