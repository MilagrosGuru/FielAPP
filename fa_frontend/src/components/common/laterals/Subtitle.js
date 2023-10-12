import React from 'react';
import styles from "../../../Assests/css/common/laterals/subtitle.module.scss";


class Subtitulo extends React.Component{
    render(){
        return(
            <p className={styles.subtitulo}>  
                {this.props.txt}
            </p>
        );
    }
}
export default Subtitulo;