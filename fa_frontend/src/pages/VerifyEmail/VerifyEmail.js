import React,  {useState} from 'react';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


import StartHeader from '../../components/common/header/StartHeader'
import Mistakes from "../../components/common/Mistakes/Mistake"
import Success from "../../components/common/Success/success"
import CentralText from "../../components/common/centralText/centralText"
import VerifyEmailTitle from "../../components/pages/VerifyEmail/VerifyEmailTitle"
import BtnSendVerification from "../../components/pages/VerifyEmail/BtnSendVerification"


import styles from "../../../src/Assests/css/pages/verifyemail/verifyemail.module.scss"

function VerifyEmail (){

    const [errorState, setErrorState] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [successState, setSuccessState] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [verificationResult, setVerificationResult] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const datoParam = queryParams.get('dato');
    console.log(datoParam);
    let userObject = null;
    
    try {
        userObject = JSON.parse(decodeURIComponent(datoParam));
    } catch (error) {}
    console.log(userObject);

    const handleVerificationComplete = (result) => {
        if(result===1){
            const message = 'Verificación enviada. Revise su correo y haga clic en el enlace para completar el registro.';
            /*setVerificationResult(result);
            setSuccessState(message);
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
                navigate('/Login'); 
            }, 5000); */
            
        }else if(result===0){
            const message = 'Error en envio de Verificación, intentelo de nuevo';
            /*setErrorState(message);
            setShowErrorMessage(true);
            setTimeout(() => {
                setShowErrorMessage(false);
                navigate('/Login'); 
            }, 5000);*/ 
            
        }
    };

    return(
        <div className="overallContainer">
            <div className="headerContainer">
                <StartHeader />
            </div>
            <div className="centerContainer">
                <div className="leftContainer"></div>
                <div className="center">
                    <main className="contLogin">   
                        <section>
                            <VerifyEmailTitle />
                        </section>
                        <section>
                            <CentralText text={'¡Gracias por ayudarnos a hacer más segura tu cuenta! Haz clic en el botón más abajo para enviar la verificación de tu correo electrónico'}/>
                        </section>
                        <section className={styles.contButton}>
                            <div className={styles.ContgenButton}>
                                <BtnSendVerification myUser={userObject} onVerificationComplete={handleVerificationComplete}/>
                            </div>
                        </section>
                        <section>
                            <CentralText text={'¿No creaste una cuenta? Haz clic aquí para eliminar esta dirección de correo electrónico.'}/>
                        </section>
                    </main>
                    {verificationResult===1 ? (
                        <Success message={successState} />
                    ) : verificationResult === 0 ?(
                        <Mistakes message={errorState} />
                    ): null}
                </div>
                <div className="rightContainer"></div>
            </div>

        </div>
    );
    

}
export default VerifyEmail; 