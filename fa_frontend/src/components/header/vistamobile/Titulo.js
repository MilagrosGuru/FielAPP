import React from 'react';
import styles from "../../../Assests/css/home/homedesktop/header.module.scss";


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