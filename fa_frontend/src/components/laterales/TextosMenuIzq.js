import React from 'react';
import styles from "../../Assests/css/laterales/textosmenuizq.module.scss";


class TextosMenuIzq extends React.Component{
    render(){
        return(
            <>
                <div className={styles.textosmenuizq}>
                    <p>{this.props.txt}</p>
                </div>
            </>
        );
    }
}
export default TextosMenuIzq;