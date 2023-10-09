import React from 'react';
import styles from "../../../Assests/css/pages/createcompany/titlecompany.module.scss";


class Title extends React.Component{
    render(){
        return(
            <p className={styles.titlecompany}>{this.props.texto1}<span>{this.props.texto2}</span></p>
        );
    }
}
export default Title;