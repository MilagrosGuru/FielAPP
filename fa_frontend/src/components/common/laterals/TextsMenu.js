import React from 'react';
import styles from "../../../Assests/css/common/laterals/textsmenu.module.scss";


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