import React, {useState}from 'react';
import {useNavigate} from 'react-router-dom';

import { update } from '../../../functions/api/Api';

import styles from "../../../Assests/css/pages/usertype/btncustomer.module.scss";

function BtnCustomer({ onActualizacionError }){
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

        const acction = "actualizar tipo de usuario ClienteFiel";
        let url =  `userType/${UserId}`+'/';
        
        /*OBJETO QUE TENDRA TODOS LOS DATOS PARA ENVIAR A LA ACTUALIZACION*/
        const nuevosDatos = {
            partnerType: false, 
            clientType: true, 
            primaryUser: false
        };
        update(url, nuevosDatos, acction)
            .then(result => {
                console.log('Actualización tipo de usuario exitosa:', result);
                navigate("/DashboardCliente"); 
            })
            .catch(error => {
                console.error('Error durante la actualización de tipo de usuario ClienteFiel:', error);
                onActualizacionError();
            });
    }
        return(
            <React.Fragment>
                <button className="styleButtonWhite" onClick={handleClick}>
                    <span className={styles.textButton}>CLIENTE <span>FIEL</span> </span>
                </button>
            </React.Fragment>
        );
}
export default BtnCustomer;