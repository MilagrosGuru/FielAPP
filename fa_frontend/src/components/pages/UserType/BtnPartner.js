import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import { update } from '../../../functions/api/Api';

import styles from "../../../Assests/css/pages/usertype/btnpartner.module.scss";


function BtnPartner({ onActualizacionError }){
    const [partnerType, setPartnerType] = useState(false);
    const [clientType, setClientType] = useState(false);
    const [primaryUser, setPrimaryUser] = useState(false);
    const [errorstate, setErrorState] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    /*DECLARO METODO DE NAVEGACION  */ 
    const navigate = useNavigate();
    
  
    const handleClick = () => {
        /*LEO LA VARIABLE ID DEL LOCAL STORAGE Y ARMO URL*/
        const UserId = localStorage.getItem('userId'); 

        const acction = "actualizar tipo de usuario SocioFiel";
        let url =  `/userType/${UserId}`+'/';
        
        /*OBJETO QUE TENDRA TODOS LOS DATOS PARA ENVIAR A LA ACTUALIZACION*/
        const nuevosDatos = {
            partnerType: true, 
            clientType: false, 
            primaryUser: true
        };
        update(url, nuevosDatos, acction)
            .then(result => {
                console.log('Actualización tipo de usuario exitosa:', result);
                navigate("/CrearEmpresa"); 
            })
            .catch(error => {
                console.error('Error durante la actualización de tipo de usuario SocioFiel:', error);
                onActualizacionError();
            });
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