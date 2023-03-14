import React from 'react';
import styles from "../../Assests/css/laterales/textosmenu.module.scss";


class TextosMenu extends React.Component{
    render(){
        return(
            <>
                <div className={styles.textosmenu}>
                    <p>{this.props.txt}</p>
                </div>
            </>
        );
    }
}
export default TextosMenu;