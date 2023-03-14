import React from 'react';
import { FaSistrix } from "react-icons/fa";
import styles from "../../../Assests/css/header/desktop/buscador.module.scss";


class Logo extends React.Component{
    render(){
        return(
            <div className={styles.search}>
                <form action="#">
                    <input type="text" placeholder="Buscar en FielAPP" name="search" className={styles.centrar} maxLength="20"/>
                    <button>
                        <FaSistrix></FaSistrix>
                    </button>
                </form>
            </div>
        );
    }
}
export default Logo;