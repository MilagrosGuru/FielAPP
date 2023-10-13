import React from 'react';
import styles from "../../../Assests/css/common/centraltext/centraltext.module.scss"
function centralText ({ text, customStyles, delimiter }){
    if (customStyles) {
        const [part1, part2] = text.split(delimiter);
        return (
            <div>
                <div className={styles.part1}>{part1}</div>
                <div className={styles.part2}>{part2}</div>
            </div>
        );
    }
    
    return <p>{text}</p>;
}
export default centralText;