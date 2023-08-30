import React,  {useState, useEffect} from 'react';                            

import UpdateHeader from '../../components/common/header/UpdateHeader';
import Mistake from '../../components/common/Mistakes/Mistake';

import styles from "../../../src/Assests/css/pages/updateprofile/updateprofile.module.scss"


function Probando()
{
    /*DECLARO VARIABLES DE ESTADO DONDE GUARDO LA INFORMACION QUE VIENE DE LA API ORIGINAL*/
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mierror, setMiError] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    console.log('Componente UpdateProfile renderizado');
    
    /*LEO LA VARIABLE ID DEL LOCAL STORAGE Y ARMO URL*/
    const UserId = localStorage.getItem('userId');                              
    const baseURL = process.env.REACT_APP_BACKEND_URL + `user/${UserId}`;

    /*ESTILOS */
    const sizeButton = {
        width: '50%',
    };
    const style2 = {
        fontSize: '10px',  
    };
    const style1 = {
        fontSize: '12px',  
    };
    const style3 = {
        fontSize: '8px',
        fontWeight: 'bold',   
    };
    const showErrorAndRedirect = () => {
        if(mierror){
            setShowErrorMessage(true);
            setTimeout(() => {
                //setShowErrorMessage(false);
                /*navigate('/Bienvenido');   */                                      
            }, 3000); 
        }
    };
    /*LLAMO LA API APENAS SE CARGUE LA PAGINA  Y ASIGNO A LAS VARIABLES DE ESTADO EL RETORNO DE LA API*/
    useEffect(() => {
        fetch(baseURL)
            .then((response) => response.json())
            .then((data) => {
                setName(data.name);
                setLastName(data.last_name);
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API:', error);
            });
    }, []); 

    useEffect(() => {
        showErrorAndRedirect();
    }, [mierror]);

    /*DEFINO LOS HANDLER PARA LOGRAR LA ACTUALIZACION DE LOS DATOS*/
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    
    /*FUNCION DE ACTUALIZACION DE DATOS*/
    const updateInformation = () => {
        const datosModificados = {
            name: name, 
            last_name: lastName, 
        };
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosModificados)
        };
        const baseURL = process.env.REACT_APP_BACKEND_URL+ `user/${UserId}`;
        console.log(baseURL); 
        
        fetch(baseURL, requestOptions)
            .then(response =>{ 
                console.log(response);
                if (!response.ok) {
                    if (response.status === 400) {
                        throw new Error('Error 400: Petición incorrecta');
                    } else if (response.status === 401) {
                        throw new Error('Error 401: No autorizado');
                    } else if (response.status === 500) {
                        throw new Error('Error 500: Error arespuesta del servidor');
                    } else if(response.status === 201){
                        throw new Error('Error 201: Error al analizar la respuesta del servidor como JSON');
                    } else{
                        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
                    }
                }
                return response.json();
            })
            .then(result => {
                console.log('todo bien');
            })
            .catch(error => {
                console.log('en el catch');
                let errorMessage = 'Error desconocido';
                if (error.message.includes('400')) {
                    errorMessage = 'Error 400: Petición incorrecta';
                } else if (error.message.includes('401')) {
                    errorMessage = 'Error 401: No autorizado';
                } else if (error.message.includes('500')) {
                    errorMessage = 'Error 500: Error interno del servidor';
                }else if(error.message.includes('201')){
                    errorMessage = 'Error 201: Ocurrió un error al procesar la respuesta';
                }

                const part1 = 'Falló la actualización: ';
                const part2 =  errorMessage;
                const part3 = 'será redireccionado en 3 segundos...';
                setMiError([part1, part2, part3]);
                //setMiError(errormio);
                
            });
    };
    return(
        <div className="overallContainer">
            <div className="headerContainer">
                <UpdateHeader />
            </div>
            <div className="centerContainer">
                <div className="leftContainer"></div>
                <div className="center">
                    <main className={styles.contUpdate}>   
                        <section>
    
                        </section>
                        <section className={styles.sectionStyles}>
                            <form className={styles.styleForm}>
                                <div className={styles.contForm}>
                                    <div className={styles.contLabels}>
                                        <div className={styles.labelsStyle}>
                                            <label>Nombre:</label>
                                            <label>Apellido:</label>
                                        </div>
                                        <div className={styles.requiredStyle}>
                                            <label>*</label>
                                            <label>*</label>
                                        </div>
                                    <div className={styles.contInformation}>
                                        <div>
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={name || ''}
                                                onChange={handleNameChange}
                                                id="nombre" 
                                                placeholder="Nombre"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="apellido"
                                                value={lastName || ''}
                                                onChange={handleLastNameChange}
                                                id="apellido" 
                                                placeholder="Apellido"
                                                required
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <input className="styleButtonPurple"  type="button"  style={sizeButton} value="Actualizar" onClick={updateInformation}/>
                            </form>
                            {showErrorMessage && <Mistake message={mierror.map((part, index) => (
                                <div key={index}>
                                    <span style={index === 0 ? style1 : index === 1 ? style2 : style3}>{part}</span>
                                </div>
                            ))} />}
                        </section>
                    </main>
                </div>
                <div className="rightContainer"></div>
            </div>
        </div>
    );
}
export default Probando;