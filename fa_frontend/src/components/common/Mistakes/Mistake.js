import React from 'react';

import styles from "../../../Assests/css/common/mistakes/mistake.module.scss";


function Mistake({ message }) {
    return (
        <div className={styles.errorcontainer}>
            <div className={styles.errormessage}>{message}</div>
        </div>
    );
}

export default Mistake;