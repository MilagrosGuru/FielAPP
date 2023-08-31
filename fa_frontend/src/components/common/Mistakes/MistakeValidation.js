import React from 'react';

import styles from "../../../Assests/css/common/mistakes/mistakevalidation.module.scss";


function MistakeValidation({ message }) {
    return (
        <div className={styles.errorcontainer}>
            <div className={styles.errormessage}>{message}</div>
        </div>
    );
}

export default MistakeValidation;