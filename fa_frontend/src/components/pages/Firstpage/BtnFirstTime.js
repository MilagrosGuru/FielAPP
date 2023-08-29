import React from 'react';
import styles from "../../../Assests/css/pages/firstpage/btnfirsttime.module.scss";
import {useNavigate} from 'react-router-dom';


function  BtnFirstTime(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Login"); 
    };
    return(
        <button className="styleButtonWhite" onClick={handleClick}>
            <span className={styles.textButton}>Mi primera vez</span>
        </button>
    );
}
export default  BtnFirstTime;