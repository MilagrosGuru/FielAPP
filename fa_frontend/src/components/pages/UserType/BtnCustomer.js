import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from "../../../Assests/css/pages/usertype/btncustomer.module.scss";

function BtnCustomer(){
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("es un cliente fiel");
        navigate("/Login"); 
    };
        return(
            <React.Fragment>
                <button className="styleButtonWhite" onClick={handleClick}>
                    <span className={styles.textButton}>CLIENTE <span>FIEL</span> </span>
                </button>
            </React.Fragment>
        );
}
export default BtnCustomer;