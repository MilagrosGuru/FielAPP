import React,  {useState, useEffect} from 'react';
import { useNavigate, Link} from 'react-router-dom';    

import { update } from '../../functions/api/Api';
import { read } from '../../functions/api/Api';

import RegistrationHeader from '../../components/common/header/RegistrationHeader'
import PhotoBackground from '../../components/pages/UpdateProfile/PhotoBackground'
import Success from "../../components/common/Success/success"
import Mistake from '../../components/common/Mistakes/Mistake';
import MistakeValidation from '../../components/common/Mistakes/MistakeValidation';

import PhotoImage from '../../Assests/images/btn4.png'
import imglogo from "../../Assests/images/btn2.png";

import LoadingSpinner from '../../components/common/LoadingSpinner/LoadingSpinner';

import styles from "../../../src/Assests/css/pages/updateprofile/updateprofile.module.scss"


function UpdateProfile()
{
    /*DECLARO VARIABLES DE ESTADO DONDE GUARDO LA INFORMACION QUE VIENE DE LA API ORIGINAL Y MANEJO DE ERRORES*/
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [documenttype, setDocumentType] = useState('');
    const [documentnumber, setDocumentNumber] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [city, setCity] =  useState('');
    const [address, setAddress] =  useState('');
    const [phone, setPhone] =  useState('');
    const [gender, setGender] =  useState('');
    const [photo, setPhoto] =  useState('');  
    const [errorstate, setErrorState] = useState('');
    const [errorType, setErrorType] = useState(false);
    const [errorNumber, setErrorNumber] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorBirthdate, setErrorBirthdate] = useState(false);
    const [errortypemessage, setErrorTypeMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [successState, setSuccessState] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [emptyFields, setEmptyFields] = useState([]);
    const [isvalid, setIsValid] = useState(true);
    const [loading, setLoading] = useState(false);
    const [department, setDepartment] =  useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState([]);
    
    /*DECLARO METODO DE NAVEGACION  */                                              
    const navigate = useNavigate();                                                            

    /*LEO LA VARIABLE ID DEL LOCAL STORAGE Y ARMO URL*/
    console.log("Iniciando carga de datos guardados en la base de datos");
    const UserId = localStorage.getItem('userId');                              
    const baseURL = process.env.REACT_APP_BACKEND_URL + `/user/${UserId}`;
    console.log('Id:',UserId);
    console.log('URL:',baseURL);

    /*ESTILOS */
    const sizeButton = {
        width: '50%',
        marginTop: '0',
    };
    const marginButton = {
        marginTop: '0',
    };
    const style3 = {
        fontSize: '8px',  
        fontWeight: 'bold', 
    };
    const style2 = {
        fontSize: '9px',   
    };
    const style1 = {
        fontSize: '10px',  
    };

    /*FUNCION PARA HABILITAR MENSAJE DE ACTUALIZACION CORRECTA*/
    const showSuccessAndRedirect = () => {
        const part1 = 'Actualización realizada correctamente, ';      
        const part2 = 'será redireccionado en 3 segundos...';
        setSuccessState([part1, part2]);
        setShowSuccessMessage(true);
        setTimeout(() => {
            setLoading(false);
            setShowSuccessMessage(false);
            navigate('/TipoUsuario'); 
        }, 3000); 
    };
    /*FUNCION PARA HABILITAR MENSAJE DE ACTUALIZACION INCORRECTA*/
    const showErrorAndRedirect = () => {
        if(errorstate){
            setShowErrorMessage(true);
            setTimeout(() => {
                setLoading(false);
                setShowErrorMessage(false);
                /*navigate('/Bienvenido');   */                                      
            }, 5000);
        } 
    };

    /*LLAMO LA API APENAS SE CARGUE LA PAGINA  Y ASIGNO A LAS VARIABLES DE ESTADO EL RETORNO DE LA API*/
    useEffect(() => {
        fetch(baseURL)
            .then((response) => response.json())
            .then((data) => {

                console.log("Inicio carga combo departamento");
                console.log(data.department);
                const acction = "CargarDepartamentos";
                let url =  '/department/list';
                read(url, acction)
                .then((department) => {
                    setDepartment(department);
                })
                .catch((error) => {
                    console.error('Error en la lectura de datos de departamentos:', error);
                });
                
                setName(data.name);
                setLastName(data.last_name);
                setDocumentType(data.document_type);
                setDocumentNumber(data.document_number);
                setEmail(data.email);
                setPhone(data.telephone);
                setBirthdate(data.born_date);
                //setDepartment(data.department);
                setCity(data.city);
                setAddress(data.address);
                setGender(data.gender);
                setPhoto(data.photo);
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API:', error);
            });
    }, []); 
    /*CARGO COMBOS APENAS CARGA LA PAGINA
    useEffect(() => {
        console.log("Inicio carga combo departamento");
        const acction = "CargarDepartamentos";
        let url =  '/department/list';
        read(url, acction)
            .then((dataDepartment) => {
                setDatosDepartment(dataDepartment);
            })
            .catch((error) => {
                console.error('Error en la lectura de datos de departamentos:', error);
            });
    }, []);*/

    /*RENDERIZACION DEL ESTADO ERRORSTATE*/
    useEffect(() => {
        showErrorAndRedirect();
    }, [errorstate]);

    /*DEFINO LOS HANDLER PARA LOGRAR LA ACTUALIZACION DE LOS DATOS*/
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleDocumentTypeChange = (event) => {
        
        const inputValue = event.target.value;
        if (/^[A-Za-z]*$/.test(inputValue) && inputValue.length <= 2) {
            setDocumentType(inputValue);
            setErrorType(false);
            
        } else {
            setErrorTypeMessage('Ingrese solo caracteres válidos (A-Z, a-z)');
            setErrorType(true);
        }
    };
    const handleDocumentNumberChange = (event) => {
        const inputValue = event.target.value;
        if (/^[0-9]*$/.test(inputValue) && inputValue.length <=10) {
            setDocumentNumber(inputValue);
            setErrorNumber(false);
            
        } else {
            setErrorTypeMessage('Ingrese solo números');
            setErrorNumber(true);
        }
    };
    const handleEmailChange = (event) => {
        const inputValue = event.target.value;
        setEmail(inputValue);
        if (inputValue.trim() === '') {
            setIsValid(true);
        } else {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            setIsValid(emailPattern.test(inputValue));
            setErrorTypeMessage('Ingrese una dirección de Email valida');
            setErrorEmail(true);
        }
    };
    const handleBirthdateChange = (event) => {
        const inputValue = event.target.value;
        setBirthdate(inputValue);
    };
    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };
    const handlePhoneChange = (event) => {
        const inputValue = event.target.value;
        if (/^[0-9]*$/.test(inputValue) && inputValue.length <=12) {
            setPhone(inputValue);
            setErrorPhone(false);
            
        } else {
            setErrorTypeMessage('Ingrese solo números');
            setErrorPhone(true);
        }
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setPhoto(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    /*FUNCION DE ACTUALIZACION DE DATOS*/
    const updateInformation = () => {
        setLoading(true);
        const acction = "actualizar perfil socio";
        let url =  `/user/${UserId}`+'/';
        /*OBJETO QUE TENDRA TODOS LOS DATOS PARA ENVIAR A LA ACTUALIZACION*/
        const datosModificados = {
            name: name, 
            last_name: lastName, 
            document_type: documenttype, 
            document_number: documentnumber, 
            telephone: phone, 
            email: email, 
            born_date: birthdate, 
            department:  selectedDepartment, 
            city: city, 
            address: address, 
            gender: gender
        };

        /*VALIDACION DE CAMPOS VACIOS*/
        const requiredFields = ['name', 'last_name', 'document_type', 'document_number', 'telephone', 'email', 'born_date', 'department', 'city', 'address', 'gender'];
        const missingFields = requiredFields.filter(field => !datosModificados[field]);
        if (missingFields.length > 0) {
            const emptyFieldsArray = [];
            if (name === '') emptyFieldsArray.push('nombre');
            if (lastName === '') emptyFieldsArray.push('apellido');
            if (documenttype === '') emptyFieldsArray.push('documenttype');
            if (documentnumber === '') emptyFieldsArray.push('documentnumber');
            if (phone === '000000000000') emptyFieldsArray.push('telefono');
            if (email === '') emptyFieldsArray.push('correo');
            if (birthdate === '') emptyFieldsArray.push('fechaNacimiento');
            if (selectedDepartment.length === 0) emptyFieldsArray.push('department');
            if (city === '') emptyFieldsArray.push('ciudad');
            if (address === '') emptyFieldsArray.push('direccion');
            if (gender === '') emptyFieldsArray.push('genero');
            setEmptyFields(emptyFieldsArray);
            console.log('error de campos vacios');
            const errorMessage = `${missingFields.join(', ')}`;
            const part1 = 'Faltan campos obligatorios ';
            const part2 =  '';
            const part3 = 'cargelos para continuar';
            setErrorState([part1, part2, part3]);
            return;
        }
        update(url, datosModificados, acction)
            .then(result => {
                console.log('Actualización exitosa:', result);
                showSuccessAndRedirect();
            })
            .catch(error => {
                console.error('Error durante la actualización:', error);
                const part1 = 'Se ha generado un error.';
                const part2 =  'Por favor consulte al';
                const part3 = 'administrador.';
                setErrorState([part1, part2, part3]);
            });
    };
    const titleheader = "Actualizar Perfil";
    return(
        <div className="overallContainer">
            <div className="headerContainer">
                <RegistrationHeader imglogo={imglogo} titleheader={titleheader}/>
            </div>
            <div className="centerContainer">
                <div className="leftContainer"></div>
                <div className="center">
                    {loading ? (  // Verifica si loading es true
                        <div className="spinner-container">
                            <LoadingSpinner texto="¡Personalizando tu experiencia FIEL! Tu perfil se está transformando..." size={15} color={'#36D7B7'} loading={true} />
                        </div>
                    ) : (
                    <main className={styles.contUpdate}>   
                        <section className={styles.contphoto}>
                            <div className={styles.contphototext}>
                                <div className={styles.photo}>
                                    {photo ? (
                                        <PhotoBackground src={photo}></PhotoBackground>
                                    ) : (
                                        <PhotoBackground src={PhotoImage}></PhotoBackground>
                                    )}
                                </div>
                                <div className={styles.textphoto}>
                                    <input type="file" id="inputImagen" style={{ display: 'none' }} onChange={handleImageChange} />
                                    <label className={styles.changePhoto} htmlFor="inputImagen">CAMBIAR FOTO</label>
                                </div>
                            </div>
                        </section>
                        <section className={styles.sectionStyles}>
                            <form className={styles.styleForm}>
                                <div className={styles.contForm}>
                                    <div className={styles.contInformation}>
                                        <div className={styles.formLine}>
                                            <div className={styles.contLabels}>
                                                <div>
                                                    <label>Nombre</label><span>*</span>
                                                </div>
                                                <div>
                                                    <label>Apellido</label><span>*</span>
                                                </div>
                                            </div>
                                            <div className={styles.contInput}>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="nombre"
                                                        value={name || ''}
                                                        onChange={handleNameChange}
                                                        id="nombre" 
                                                        placeholder="Nombre"
                                                        required
                                                        className={emptyFields.includes('nombre') ? styles.redBorder : ''}
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
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        className={emptyFields.includes('apellido') ? styles.redBorder : ''}
                                                    /> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.formLine}>
                                            <div className={styles.contLabels}>
                                                <div>
                                                    <label>Documento de Identidad</label><span>*</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className={styles.contInput}>
                                                <div>
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
                                                        className={emptyFields.includes('documenttype') ? styles.redBorder : ''}
                                                        title="Solo se permiten caracteres (A-Z, a-z)"
                                                    />
                                                    {errorType && <MistakeValidation message={errortypemessage} />}
                                                </div>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="documentnumber"
                                                        value={documentnumber || ''}
                                                        onChange={handleDocumentNumberChange}
                                                        id="documentnumber" 
                                                        placeholder="Número"
                                                        required
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        className={emptyFields.includes('documentnumber') ? styles.redBorder : ''}
                                                    />
                                                    {errorNumber && <MistakeValidation message={errortypemessage} />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.formLine}>
                                            <div className={styles.contLabels}>
                                                <div>
                                                    <label>Email</label><span>*</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className={styles.contInput}>
                                                <div style={{ width: '100%' }}>
                                                    <input
                                                        type="email"
                                                        name="correo"
                                                        value={email || ''}
                                                        onChange={handleEmailChange}
                                                        id="Correo" 
                                                        placeholder="Email"
                                                        required
                                                        style={{
                                                            borderColor: isvalid ? 'lightgrey' : 'red',
                                                            width: '100%',
                                                        }}
                                                        className={emptyFields.includes('correo') ? styles.redBorder : ''}
                                                    />
                                                    {!isvalid && <MistakeValidation message={errortypemessage} />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.formLine}>
                                            <div className={styles.contLabels}>
                                                <div>
                                                    <label>Dirección</label><span>*</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className={styles.contInput}>
                                                <div style={{ width: '100%' }}>
                                                    <input
                                                        type="text"
                                                        name="direccion"
                                                        value={address || ''}
                                                        onChange={handleAddressChange}
                                                        id="direccion" 
                                                        placeholder="Dirección"
                                                        required
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        className={emptyFields.includes('direccion') ? styles.redBorder : ''}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.formLine}>
                                            <div className={styles.contLabels}>
                                                <div>
                                                    <label>Departamento</label><span>*</span>
                                                </div>
                                                <div>
                                                    <label>Ciudad</label><span>*</span>
                                                </div>
                                            </div>
                                            <div className={styles.contInput}>
                                                <div>
                                                    <select id="Department" value={selectedDepartment} onChange={handleDepartmentChange} className={emptyFields.includes('department') ? styles.redBorder : ''}>
                                                        <option id="firstOption" value="" className={styles.selectgroup}>Selecciona una opción</option>
                                                        {department.map((item) => (
                                                            <option key={item.id} value={item.id}>
                                                                {item.name}
                                                            </option>
                                                        ))}
                                                    </select>
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
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        className={emptyFields.includes('ciudad') ? styles.redBorder : ''}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.formLine}>
                                            <div className={styles.contLabels}>
                                                <div>
                                                    <label>Fecha de Nacimiento</label><span>*</span>
                                                </div>
                                                <div>
                                                    <label>Teléfono</label><span>*</span>
                                                </div>
                                            </div>
                                            <div className={styles.contInput}>
                                                <div>
                                                    <input
                                                        type="date"
                                                        name="fechaNacimiento"
                                                        value={birthdate || ''}
                                                        onChange={handleBirthdateChange}
                                                        id="fechaNacimiento" 
                                                        placeholder="Fecha de Nacimiento"
                                                        required
                                                        className={emptyFields.includes('fechaNacimiento') ? styles.redBorder : ''}
                                                    />
                                                    {errorBirthdate && <MistakeValidation message={errortypemessage} />}
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
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        className={emptyFields.includes('telefono') ? styles.redBorder : ''}
                                                    />
                                                    {errorPhone && <MistakeValidation message={errortypemessage} />}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.formLine}>
                                            <div className={styles.contLabels}>
                                                <div>
                                                    <label>Género</label><span>*</span>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div className={styles.contInput}>
                                                <div style={{ width: '100%' }}>
                                                    <select
                                                        name="genero"
                                                        value={gender || ''}
                                                        onChange={handleGenderChange}
                                                        id="genero" 
                                                        placeholder="Género"
                                                        required
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        className={emptyFields.includes('genero') ? styles.redBorder : ''}
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
                                </div>
                                <div className={styles.contbutton}>
                                <input className="styleButtonPurple"  type="button"  style={sizeButton} value="Actualizar" onClick={updateInformation}/>
                                {showErrorMessage && <Mistake message={errorstate.map((part, index) => (
                                    <div key={index}>
                                        <span style={index === 0 ? style1 : index === 1 ? style1 : style1}>{part}</span>
                                    </div>
                                ))} />}
                                {showSuccessMessage && <Success message= {successState.map((part, index) => (
                                    <div key={index}>
                                        <span style={index === 0 ? style1 : style2}>{part}</span>
                                    </div>
                                ))} />}
                                </div>
                                
                                </form>
                        </section>
                    </main>
                    )}
                </div>
                <div className="rightContainer"></div>
            </div>
        </div>
    );
}
export default UpdateProfile;

