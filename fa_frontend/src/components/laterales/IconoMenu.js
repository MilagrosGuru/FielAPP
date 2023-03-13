import React from 'react';
import styles from "../Assests/css/home/homedesktop/header.module.scss";


class IconoMenu extends React.Component{
    render(){
        return(
            <div className={styles.botonheader}>
                <img src={this.props.src} alt="boton"></img>  
            </div>
        );
    }
}
export default IconoMenu;