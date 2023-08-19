import React from 'react';
import styles from "../../../Assests/css/pages/mistakes/mistake.module.scss";


function Mistake({ message }) {
    return (
        <div className={styles.errorcontainer}>
            <p className={styles.errormessage}>{message}</p>
        </div>
    );
}

export default Mistake;