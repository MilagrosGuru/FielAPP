import React from 'react';
import styles from "../../Assests/css/laterales/iconomenu.module.scss";


class IconoMenu extends React.Component{
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
export default IconoMenu;