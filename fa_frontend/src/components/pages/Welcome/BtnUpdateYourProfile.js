import React from 'react';
import styles from "../../../Assests/css/pages/welcome/btnupdateyourprofile.module.scss";
import {useNavigate} from 'react-router-dom';


function  BtnUpdateYourProfile(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/ActualizarPerfilSocio");
    };
    return(
        <button className="styleButtonWhite" onClick={handleClick}>
            <span className={styles.textButton}>Actualiza tu perfil</span>
        </button>
    );
}
export default  BtnUpdateYourProfile;
