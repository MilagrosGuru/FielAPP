import React from 'react';
import {useNavigate} from 'react-router-dom';

import styles from "../../../Assests/css/pages/usertype/btnpartner.module.scss";


function BtnPartner(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/CrearEmpresa"); 
        console.log("es un cliente fiel");
    };

        return(
            <React.Fragment>
                <button className="styleButtonWhite" onClick={handleClick}>
                    <div className={styles.contTextButton}>
                        <span className={styles.textButton1}>ERES EMPRESA</span>
                        <span className={styles.textButton2}>SOCIO <span>FIEL</span> </span>
                    </div>
                </button>
            </React.Fragment>
        );
    
}
export default BtnPartner;