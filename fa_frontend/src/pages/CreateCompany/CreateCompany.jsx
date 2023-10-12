import React,  {useState, useEffect} from 'react';
import { useNavigate, Link} from 'react-router-dom';    

import { create } from '../../functions/api/Api';
import { read } from '../../functions/api/Api';

import RegistrationHeader from '../../components/common/header/RegistrationHeader'
import LogoBackground from '../../components/pages/createcompany/LogoBackground'
import Success from "../../components/common/Success/success"
import Mistake from '../../components/common/Mistakes/Mistake';
import MistakeValidation from '../../components/common/Mistakes/MistakeValidation';
import Title from '../../components/common/GeneralTitle/Title';
import OtherImages from '../../components/common/otherimages/OtherImages';

import LogoImage from '../../Assests/images/btn4.png'
import imglogo from "../../Assests/images/btn2.png";
import LeftArrow from "../../Assests/images/Leftarrow.png";


import styles from "../../../src/Assests/css/pages/createcompany/createcompany.module.scss"


function CreateCompany()
{
    /*DECLARO VARIABLES DE ESTADO DONDE GUARDO LA INFORMACION QUE VIENE DE LA API ORIGINAL Y MANEJO DE ERRORES*/
    const [namecompany, setNameCompany] = useState('');
    const [nit, setNit] = useState('');
    const [category, setCategory] = useState('');
    const [timetable, setTimetable] = useState('');
    const [selectedCountry, setSelectedCountry] =  useState([]);
    const [address, setAddress] =  useState('');
    const [phone, setPhone] =  useState('');
    const [logo, setLogo] =  useState('');  
    const [errorstate, setErrorState] = useState('');
    const [errorPhone, setErrorPhone] = useState(false);
    const [errortypemessage, setErrorTypeMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [successState, setSuccessState] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [emptyFields, setEmptyFields] = useState([]);
    const [datosdepartment, setDatosDepartment] =  useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState([]);
    const [datoscountry, setDatosCountry] =  useState([]);
    const [isvalid, setIsValid] = useState(true);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [categorias, setCategorias] = useState([]);
    
    /*DECLARO METODO DE NAVEGACION  */                                              
    const navigate = useNavigate();                                                            

    /*LEO LA VARIABLE ID DEL LOCAL STORAGE Y ARMO URL*/
    const UserId = parseInt(localStorage.getItem('userId'));
    
    /*ESTILOS */
    const sizeButton = {
        width: '50%',
    };
    const style2 = {
        fontSize: '9px',   
    };
    const style1 = {
        fontSize: '10px',  
    };

    /*FUNCION PARA HABILITAR MENSAJE DE ACTUALIZACION CORRECTA*/
    const showSuccessAndRedirect = () => {
        const part1 = 'Compañia creada con éxito, ';      
        const part2 = 'será redireccionado en 3 segundos...';
        setSuccessState([part1, part2]);
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
            navigate('/DashboardSocio'); 
        }, 3000); 
    };
    /*FUNCION PARA HABILITAR MENSAJE DE ACTUALIZACION INCORRECTA*/
    const showErrorAndRedirect = () => {
        if(errorstate){
            setShowErrorMessage(true);
            setTimeout(() => {
                setShowErrorMessage(false);
                /*navigate('/');   */                                     
            }, 5000);
        } 
    };

    /*CARGO COMBOS APENAS CARGA LA PAGINA*/
    useEffect(() => {
        console.log("Inicio carga combos");
        const acction = "CargarDepartamentos";
        let url =  'department/list';
        read(url, acction)
            .then((dataDepartment) => {
                setDatosDepartment(dataDepartment);
            })
            .catch((error) => {
                console.error('Error en la lectura de datos de departamentos:', error);
            });
            
        const acction2 = "CargarPaises";
        let url2 =  'country/list';
        read(url2, acction2)
            .then((dataCountry) => {
                setDatosCountry(dataCountry);
            })
            .catch((error) => {
                console.error('Error en la lectura de datos de paises:', error);
            });
    }, []);

    /*RENDERIZACION DEL ESTADO ERRORSTATE*/
    useEffect(() => {
        showErrorAndRedirect();
    }, [errorstate]);

    /*DEFINO LOS HANDLER PARA LOGRAR LA ACTUALIZACION DE LOS DATOS*/
    const handleNameCompanyChange = (event) => {
        setNameCompany(event.target.value);
    };
    const handleNitChange = (event) => {
        setNit(event.target.value);
    };
    const handleCategoryChange = (event) => {
        const categoryNumber = parseInt(event.target.value); 
        setCategory(categoryNumber);
    };
    const handleTimetableChange = (event) => {
        setTimetable(event.target.value);
    };
    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
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
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setLogo(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    /*FUNCION DE CREAR COMPAÑIA*/
    const createCompany = () => {
        console.log("inicio crear compania");
        const acction = "CrearCompañia";
        let url =  'company/create';
        const urllogo = 'www.logo.com';
        /*OBJETO QUE TENDRA TODOS LOS DATOS PARA ENVIAR A LA CREACION*/
        const CompanyDetails = {
            logo: urllogo,
            companyName: namecompany, 
            NIT: nit,
            timetable: timetable, 
            category: category, 
            country_com: selectedCountry, 
            department_com: selectedDepartment, 
            user_id: UserId,
            address: address,
            telephone: phone 
        };
        console.log("arreglo de campos vacios");
        console.log(CompanyDetails);

        /*VALIDACION DE CAMPOS VACIOS*/
        console.log("validando campos vacios");
        const requiredFields = ['logo','companyName', 'NIT', 'category', 'timetable', 'department_com', 'country_com', 'address', 'telephone'];
        const missingFields = requiredFields.filter(field => !CompanyDetails[field]);
        if (missingFields.length > 0) {
            const emptyFieldsArray = [];
            if (namecompany === '') emptyFieldsArray.push('companyName');
            if (nit === '') emptyFieldsArray.push('nit');
            if (category === '') emptyFieldsArray.push('category');
            if (timetable === '') emptyFieldsArray.push('timetable');
            if (selectedDepartment.length === 0) emptyFieldsArray.push('department');
            if (selectedCountry.length === 0) emptyFieldsArray.push('country');
            if (address === '') emptyFieldsArray.push('address');
            if (phone === '') emptyFieldsArray.push('telephone');
            setEmptyFields(emptyFieldsArray);
            console.log('error de campos vacios');
            const errorMessage = `${missingFields.join(', ')}`;
            const part1 = 'Faltan campos obligatorios ';
            const part2 =  '';
            const part3 = 'cargelos para continuar';
            setErrorState([part1, part2, part3]);
            return;
        }
        create(url, CompanyDetails, acction)
            .then(result => {
                console.log('Registro exitoso:', result);
                showSuccessAndRedirect();
            })
            .catch(error => {
                console.error('Error durante el registro:', error);
                const part1 = 'Se ha generado un error.';
                const part2 =  'Por favor consulte al';
                const part3 = 'administrador.';
                setErrorState([part1, part2, part3]);
            });
    };
    const titleheader = "Registro";
    const generalTitle1 = "REGISTRO EMPRESA";
    const generalTitle2 = "FIEL";
    const LinkTo = "/TipoUsuario";
    return(
        <div className="overallContainer">
            <div className="headerContainer">
                <RegistrationHeader imglogo={imglogo} titleheader={titleheader}/>
            </div>
            <div className="centerContainer">
                <div className="leftContainer"></div>
                <div className="center">
                    <main className={styles.contCreateCompany}>  
                        <section>
                            <Title texto1={generalTitle1} texto2={generalTitle2}/>
                        </section>
                        <section className={styles.sectionStyles}>
                            <form className={styles.styleForm}>
                                <div className={styles.contForm}>
                                    <div className={styles.contLabels}>
                                        <div className={styles.labelsStyle}>
                                            <label className={styles.labelLogo}>Logo:</label>
                                            <label>Nombre de Empresa:</label>
                                            <label>NIT:</label>
                                            <label>Categoria:</label>
                                            <label>Horario de atención:</label>
                                            <label>País:</label>
                                            <label>Departamento:</label>
                                            <label>Dirección:</label>
                                            <label>Número de Teléfono:</label>
                                        </div>
                                        <div className={styles.requiredStyle}>
                                            <label className={styles.labelasterisco}> </label>
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
                                            {logo ? (
                                                <LogoBackground src={logo}></LogoBackground>
                                            ) : (
                                                <LogoBackground src={LogoImage}></LogoBackground>
                                            )}
                                            <input 
                                                type="file" 
                                                id="inputImagen" 
                                                style={{ display: 'none' }} 
                                                onChange={handleImageChange} 
                                            />  
                                            <label className={styles.changeLogo} htmlFor="inputImagen">CAMBIAR LOGO</label>   
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="nameCompany"
                                                value={namecompany || ''}
                                                onChange={handleNameCompanyChange}
                                                id="namecompany" 
                                                placeholder="Nombre de Empresa"
                                                required
                                                className={emptyFields.includes('companyName') ? styles.redBorder : ''}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="nit"
                                                value={nit || ''}
                                                onChange={handleNitChange}
                                                id="nit" 
                                                placeholder="NIT"
                                                required
                                                className={emptyFields.includes('nit') ? styles.redBorder : ''}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="category"
                                                value={category || ''}
                                                onChange={handleCategoryChange}
                                                id="category" 
                                                placeholder="Categoria"
                                                required
                                                className={emptyFields.includes('category') ? styles.redBorder : ''}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="timetable"
                                                value={timetable || ''}
                                                onChange={handleTimetableChange}
                                                id="timetable" 
                                                placeholder="Horario de atención"
                                                required
                                                className={emptyFields.includes('timetable') ? styles.redBorder : ''}
                                            />
                                        </div>
                                        <div>
                                            <select id="Country" value={selectedCountry} onChange={handleCountryChange} className={emptyFields.includes('country') ? styles.redBorder : ''}>
                                                <option value="" className={styles.selectgroup}>Selecciona una opción</option>
                                                {datoscountry.map((item) => (
                                                    <option key={item.id} value={item.id}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <select id="Department" value={selectedDepartment} onChange={handleDepartmentChange} className={emptyFields.includes('department') ? styles.redBorder : ''}>
                                                <option id="firstOption" value="" className={styles.selectgroup}>Selecciona una opción</option>
                                                {datosdepartment.map((item) => (
                                                    <option key={item.id} value={item.id}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="address"
                                                value={address || ''}
                                                onChange={handleAddressChange}
                                                id="address" 
                                                placeholder="Dirección"
                                                required
                                                className={emptyFields.includes('address') ? styles.redBorder : ''}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                name="telephone"
                                                value={phone || ''}
                                                onChange={handlePhoneChange}
                                                id="telephone" 
                                                placeholder="Número de Teléfono"
                                                required
                                                className={emptyFields.includes('telephone') ? styles.redBorder : ''}
                                            />
                                            {errorPhone && <MistakeValidation message={errortypemessage} />}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className={styles.contButtonArrow}>
                                    <div className={styles.contButtons}>
                                        <OtherImages img={LeftArrow} linkTo={LinkTo}/>
                                    </div>
                                    <div className={styles.contButtons}>
                                        <input className="styleButtonPurple"  type="button"  style={sizeButton} value="Guardar" onClick={createCompany}/>
                                    </div>
                                </div>
                                
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
                            </form>
                        </section>
                    </main>
                </div>
                <div className="rightContainer"></div>
            </div>
        </div>
    );
}
export default CreateCompany;