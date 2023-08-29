import React,  {useState, useEffect} from 'react';
import { useNavigate, Link} from 'react-router-dom';

import UpdateHeader from '../../components/common/header/UpdateHeader'
import PhotoBackground from '../../components/pages/UpdateProfile/PhotoBackground'
import Mistakes from "../../components/common/Mistakes/Mistake"
import Success from "../../components/common/Success/success"


import PhotoImage from '../../Assests/images/btn4.png'

import styles from "../../../src/Assests/css/pages/updateprofile/updateprofile.module.scss"
import Mistake from '../../components/common/Mistakes/Mistake';

function UpdateProfile()
{
    /*DECLARO VARIABLES DE ESTADO DONDE GUARDO LA INFORMACION QUE VIENE DE LA API ORIGINAL*/
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [documenttype, setDocumentType] = useState('');
    const [documentnumber, setDocumentNumber] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [department, setDepartment] =  useState('');
    const [city, setCity] =  useState('');
    const [address, setAddress] =  useState('');
    const [phone, setPhone] =  useState('');
    const [gender, setGender] =  useState('');
    const [photo, setPhoto] =  useState('');                             
    const [datos, setDatos] = useState('');
    const [errorState, setErrorState] = useState('');
    const [errorType, setErrorType] = useState(false);
    const [errortypemessage, setErrorTypeMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [successState, setSuccessState] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    /*DECLARO METODO DE NAVEGACION*/
    const navigate = useNavigate();

    /*LEO LA VARIABLE ID DEL LOCAL STORAGE Y ARMO URL*/
    const UserId = localStorage.getItem('userId');
    const baseURL = process.env.REACT_APP_BACKEND_URL + `user/${UserId}`;
    console.log(baseURL);

    /*ESTILOS */
    const sizeButton = {
        width: '50%',
    };
    const style2 = {
        fontSize: '8px',  
        fontWeight: 'bold', 
    };
    const style1 = {
        fontSize: '10px',  
    };

    /*MENSAJE DE ACTUALIZACION CORRECTA*/
    const showSuccessAndRedirect = () => {
        const part1 = 'Actualización realizada correctamente, ';
        const part2 = 'será redireccionado en 3 segundos...';
        setSuccessState([part1, part2]);
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
            navigate('/TipoUsuario'); 
        }, 3000); 
    };
    /*MENSAJE DE ACTUALIZACION INCORRECTA*/
    const showErrorAndRedirect = () => {
        const part1 = 'Error en la actualización: ' + errorState;
        const part2 = 'será redireccionado en 3 segundos...';
        setErrorState([part1, part2]);
        setShowErrorMessage(true);
        setTimeout(() => {
            setShowErrorMessage(false);
            navigate('/Bienvenido'); 
        }, 3000); 
    };

    /*LLAMO LA API APENAS SE CARGUE LA PAGINA  Y ASIGNO A LAS VARIABLES DE ESTADO EL RETORNO DE LA API*/
    useEffect(() => {
        fetch(baseURL)
            .then((response) => response.json())
            .then((data) => {
                setName(data.name);
                setLastName(data.last_name);
                setDocumentType(data.document_type);
                setDocumentNumber(data.document_number);
                setEmail(data.email);
                setPhone(data.telephone);
                setBirthdate(data.born_date);
                setDepartment(data.department);
                setCity(data.city);
                setAddress(data.address);
                setGender(data.gender);
                setPhoto(data.photo);
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API:', error);
            });
    }, []); 

    /*DEFINO LOS HANDLER PARA LOGRAR LA ACTUALIZACION DE LOS DATOS*/
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleDocumentTypeChange = (event) => {
        
        const inputValue = event.target.value;
        // Utiliza una expresión regular para permitir solo letras
        if (/^[A-Za-z]*$/.test(inputValue) && inputValue.length <= 2) {
            setDocumentType(inputValue);
            setErrorType(false);
            setErrorTypeMessage('Ingrese solo caracteres válidos (A-Z, a-z)');
        } else {
            setErrorType(true);
        }
    };
    const handleDocumentNumberChange = (event) => {
        setDocumentNumber(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleBirthdateChange = (event) => {
        setBirthdate(event.target.value);
    };
    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    /*FUNCION DE ACTUALIZACION DE DATOS*/
    const updateInformation = () => {
        const datosModificados = {
            name: name, 
            last_name: lastName, 
            document_type: documenttype, 
            document_number: documentnumber, 
            telephone: phone, 
            email: email, 
            born_date: birthdate, 
            department: department, 
            city: city, 
            address: address, 
            gender: gender
        };
        console.log(datosModificados);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosModificados)
        };
        console.log(requestOptions);
        const baseURL = process.env.REACT_APP_BACKEND_URL+ `user/${UserId}`+'/';
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
                        throw new Error('Error 500: Error interno del servidor');
                    } else if(response.status === 201){
                        throw new Error('Error 201: Error al analizar la respuesta del servidor como JSON');
                    } else{
                        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
                    }
                }
                return response.json();
            })
            .then(result => {
                showSuccessAndRedirect();
            })
            .catch(error => {
                console.error('Ocurrió un error:', error.message);
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
                setErrorState(errorMessage);
                showErrorAndRedirect();
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
                            {photo ? (
                                <PhotoBackground src={photo}></PhotoBackground>
                            ) : (
                                <PhotoBackground src={PhotoImage}></PhotoBackground>
                            )}
                        </section>
                        <section className={styles.sectionStyles}>
                            <form className={styles.styleForm}>
                                <div className={styles.contForm}>
                                    <div className={styles.contLabels}>
                                        <div className={styles.labelsStyle}>
                                            <label>Nombre:</label>
                                            <label>Apellido:</label>
                                            <label>Doc. de Identidad:</label>
                                            <label>Email:</label>
                                            <label>Fecha de Nacimiento:</label>
                                            <label>Departamento:</label>
                                            <label>Ciudad:</label>
                                            <label>Dirección:</label>
                                            <label>Número de Teléfono:</label>
                                            <label>Género:</label>
                                        </div>
                                        <div className={styles.requiredStyle}>
                                            <label>*</label>
                                            <label>*</label>
                                            <label>*</label>
                                            <label>*</label>
                                            <label>*</label>
                                            <label>*</label>
                                            <label>*</label>
                                            <label>*</label>
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
                                        <div className={styles.contDocument}>
                                            <div className={styles.sizeType}>
                                                <input
                                                    type="text"
                                                    name="documenttype"
                                                    maxLength="2" 
                                                    pattern="[A-Za-z]+"
                                                    value={documenttype || ''}
                                                    onChange={handleDocumentTypeChange}
                                                    id="documenttype" 
                                                    placeholder="Tipo"
                                                    required
                                                    title="Solo se permiten caracteres (A-Z, a-z)"
                                                />
                                            </div>
                                            <div className={styles.sizeLine}>-</div>
                                            <div className={styles.sizeNumber}>
                                                <input
                                                    type="text"
                                                    name="documentnumber"
                                                    value={documentnumber || ''}
                                                    onChange={handleDocumentNumberChange}
                                                    id="documentnumber" 
                                                    placeholder="Número"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                name="correo"
                                                value={email || ''}
                                                onChange={handleEmailChange}
                                                id="Correo" 
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="date"
                                                name="fechaNacimiento"
                                                value={birthdate || ''}
                                                onChange={handleBirthdateChange}
                                                id="fechaNacimiento" 
                                                placeholder="Fecha de Nacimiento"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="departamento"
                                                value={department || ''}
                                                onChange={handleDepartmentChange}
                                                id="departamento" 
                                                placeholder="Departamento"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="ciudad"
                                                value={city || ''}
                                                onChange={handleCityChange}
                                                id="ciudad" 
                                                placeholder="Ciudad"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="direccion"
                                                value={address || ''}
                                                onChange={handleAddressChange}
                                                id="direccion" 
                                                placeholder="Dirección"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="telefono"
                                                value={phone || ''}
                                                onChange={handlePhoneChange}
                                                id="telefono" 
                                                placeholder="Número de Teléfono"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <select
                                                name="genero"
                                                value={gender || ''}
                                                onChange={handleGenderChange}
                                                id="genero" 
                                                placeholder="Género"
                                                required
                                            >
                                                <option className={styles.colorfirstoption} value="">Selecciona una opción</option>
                                                <option value="M">M</option>
                                                <option value="F">F</option>
                                                <option value="O">O</option>
                                            </select>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <input className="styleButtonPurple"  type="button"  style={sizeButton} value="Actualizar" onClick={updateInformation}/>
                            </form>
                            {showSuccessMessage && <Success message= {successState.map((part, index) => (
                                <div key={index}>
                                    <span style={index === 0 ? style1 : style2}>{part}</span>
                                </div>
                            ))} />}
                            {showErrorMessage && <Mistake message={errorState.map((part, index) => (
                                <div key={index}>
                                    <span style={index === 0 ? style1 : style2}>{part}</span>
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
export default UpdateProfile;

