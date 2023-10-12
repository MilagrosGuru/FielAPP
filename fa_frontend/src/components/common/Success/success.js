import React from 'react';

import styles from "../../../Assests/css/common/success/success.module.scss";


function Success({ message }) {
    return (
        <div className={styles.Successcontainer}>
            <div className={styles.Successmessage}>{message}</div>
        </div>
    );
}

export default Success;