import React from 'react';
import styles from "../../../Assests/css/header/mobile/titulo.module.scss";


class Titulo extends React.Component{
    render(){
        return(
            <div className={styles.titulo}>  
                {this.props.tit}
            </div>
        );
    }
}
export default Titulo;