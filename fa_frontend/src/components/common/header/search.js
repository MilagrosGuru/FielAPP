import React from 'react';
import { FaSistrix } from "react-icons/fa";
import styles from "../../../Assests/css/common/header/search.module.scss";


function Search() {
    return (
        <div className={styles.search}>
            <FaSistrix className="icon" />
            <input
                type="text"
                placeholder="Buscar en FielAPP"
                className="input-busqueda"
            />
        </div>
    );
}

export default Search;