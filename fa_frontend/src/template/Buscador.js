import React from 'react';
import styles from "../Assests/css/home/homedesktop/header.module.scss";


class Logo extends React.Component{
    render(){
        return(
            <div className={styles.search}>
                <form action="#">
                    <input type="text" placeholder="Buscar en FielAPP" name="search"/>
                    <button>
                        es un boton
                    </button>
                </form>
            </div>
        );
    }
}
export default Logo;