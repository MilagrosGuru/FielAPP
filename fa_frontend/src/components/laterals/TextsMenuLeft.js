import React from 'react';
import styles from "../../Assests/css/laterals/textsmenuleft.module.scss";


class TextosMenuIzq extends React.Component{
    render(){
        return(
            <>
                <div id={this.props.id} className={styles.textosmenuizq}>
                    <p onClick={this.quien}>{this.props.txt}</p>
                </div>
            </>
        );
    }
}
export default TextosMenuIzq;