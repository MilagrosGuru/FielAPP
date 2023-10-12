import React from 'react';
import styles from "../../../Assests/css/pages/welcome/btnstartnow.module.scss";
import {useNavigate} from 'react-router-dom';


function BtnStartNow (){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/DashboardSocio");  
    };
    return(
        <button className="styleButtonPurple" onClick={handleClick}>
            <span className={styles.textButton}>Inicia Ahora</span>
        </button>
    );

}
export default BtnStartNow;