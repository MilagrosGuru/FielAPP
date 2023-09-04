import React from 'react';

import styles from "../../../Assests/css/common/success/success.module.scss";


function Success({ message }) {
    return (
        <div className={styles.Successcontainer}>
            <p className={styles.Successmessage}>{message}</p>
        </div>
    );
}

export default Success;