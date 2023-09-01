import React, {useState, useEffect} from 'react';

import StartHeader from '../../components/common/header/StartHeader'

import BtnPartner from "../../components/pages/UserType/BtnPartner"
import BtnCustomer from"../../components/pages/UserType/BtnCustomer"
import CentralText from"../../components/common/centralText/centralText"
import Mistake from '../../components/common/Mistakes/Mistake';

import styles from "../../Assests/css/pages/usertype/usertype.module.scss"

function UserType()
{
    const [errorstate, setErrorState] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    /*ESTILOS*/
    const style1 = {
        fontSize: '10px',  
    };

    const handleActualizacionError = () => {
        const part1 = 'Se ha generado un error.';
        const part2 =  'Por favor consulte al';
        const part3 = 'administrador.';
        setErrorState([part1, part2, part3]);
    };
    /*RENDERIZACION DEL ESTADO ERRORSTATE*/
    useEffect(() => {
        showErrorAndRedirect();
    }, [errorstate]);

    /*FUNCION PARA HABILITAR MENSAJE DE ACTUALIZACION INCORRECTA*/
    const showErrorAndRedirect = () => {
        if(errorstate){
            setShowErrorMessage(true);
            setTimeout(() => {
                setShowErrorMessage(false);                                     
            }, 3000);
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
                        <section className={styles.contText}>
                            <CentralText text={'Selecciona la opción que mejor se adapta a tu necesidad'}/>
                        </section>
                        <section className={styles.contButton}>
                            <div className={styles.ContgenButton}>
                                <BtnPartner onActualizacionError={handleActualizacionError}/>
                                <BtnCustomer onActualizacionError={handleActualizacionError}/>
                            </div>
                        </section>
                    </main>
                    {showErrorMessage && <Mistake message={errorstate.map((part, index) => (
                        <div key={index}>
                            <span style={style1}>{part}</span>
                        </div>
                    ))} />}
                </div>
                <div className="rightContainer"></div>
            </div>
        </div>
    );
}
export default UserType;