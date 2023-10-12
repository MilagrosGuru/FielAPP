import React from 'react';
import styles from "../../../Assests/css/common/header/titleheader.module.scss";


function TitleHeader(props)
{
    return(
        <div className={styles.title}>  
            <p> {props.textProps}</p>      
        </div>
    );
}
export default TitleHeader;