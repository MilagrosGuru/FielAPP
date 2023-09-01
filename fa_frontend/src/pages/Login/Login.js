import React, {useState, useEffect} from 'react';

import { create } from '../../functions/api/Api';

import firebase from '../../firebase';
import { useNavigate, Link} from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import imggoogle from "../../Assests/images/google.png";
import imgfacebook from "../../Assests/images/facebook.png";
import ButtonGoogle from '../../components/pages/Login/ButtonGoogle'
import ButtonFacebook from '../../components/pages/Login/ButtonFacebook'
import LoginTitle from '../../components/pages/Login/LoginTitle'
import ForgotPassword from '../../components/pages/Login/ForgotPassword'
import TermsText from '../../components/pages/Login/TermsText'

import Mistakes from "../../components/common/Mistakes/Mistake"
import StartHeader from '../../components/common/header/StartHeader'

import styles from "../../../src/Assests/css/pages/login/login.module.scss"

function Login()
{
    /*DECLARO VARIABLES DE ESTADO*/
    const [password, setPassword] = useState('');
    const [showPwd, setshowPwd] = useState(false);
    const [emailuser, setEmailUser] = useState('');
    const [user, setUser] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [displayname, setDisplayName] =  useState(null);
    const [email, setEmail] =  useState(null);
    const [phoneNumber, setphoneNumber] =  useState(null);
    const [emailVerified, setemailVerified] =  useState(null);
    const [accessToken, setaccessToken] =  useState(null);
    const [uid, setuid] =  useState(null);
    const [errorState, setErrorState] = useState(null);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [successState, setSuccessState] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    /*DECLARO LOS PROVEEDORES DE AUTENTICACION CON FIREBASE*/
    const provider = new GoogleAuthProvider();
    const providerF = new FacebookAuthProvider();
    const auth = getAuth();

    /*DECLARO METODO DE NAVEGACION*/
    const navigate = useNavigate();

    /*FUNCION PARA HABILITAR MENSAJE DE REGISTRO CORRECTA*/
    const showSuccessAndRedirect = () => {
        const part1 = 'Registro realizado correctamente, ';      
        const part2 = 'será redireccionado en 3 segundos...';
        setSuccessState([part1, part2]);
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
            navigate('/Bienvenido');
        }, 3000); 
    };
    /*FUNCION PARA HABILITAR MENSAJE DE REGISTRO INCORRECTO*/
    const showErrorAndRedirect = () => {
        if(errorState){
            setShowErrorMessage(true);
            setTimeout(() => {
                setShowErrorMessage(false);
                navigate('/');                                    
            }, 3000);
        } 
    };

    /*RENDERIZACION DEL ESTADO ERRORSTATE*/
    useEffect(() => {
        showErrorAndRedirect();
    }, [errorState]);

    /*DEFINO LOS HANDLER PARA LA CAPTURA DE DATOS DEL FORMULARIO*/
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailUserChange = (event) => {
        setEmailUser(event.target.value);
    };
    const handleShowPasswordToggle = () => {
        setshowPwd(!showPwd);
    };

    /*LLAMADO A LA API DE REGISTRO DE USUARIO*/
    const llamarApi = (displayname, email, phonenumber) =>{
            console.log("Ambiente: "+process.env.NODE_ENV); 
            const acction = "crear registro";
            let url = 'user/create';
            /*OBJETO QUE TENDRA TODOS LOS DATOS PARA ENVIAR A LA ACTUALIZACION*/
            const datosCrear = {
                full_name:displayname,
                name: "", 
                last_name: "", 
                document_type: "", 
                document_number: "", 
                telephone: phonenumber, 
                email: email, 
                born_date:  "1981-02-10", 
                department: "", 
                city: "", 
                address: "", 
                gender: "",
                password: "", 
                photo: ""
            };

            create(url, datosCrear, acction)
            .then(result => {
                console.log('Registro exitoso:', result);
                const idUser = result.id; 
                localStorage.setItem('userId', idUser);       
                showSuccessAndRedirect();
            })
            .catch(error => {
                console.error('Error durante el registro:', error);
                const part1 = 'Se ha generado un error.';
                const part2 =  'Por favor consulte al';
                const part3 = 'administrador.';
                setErrorState([part1, part2, part3]);
            });
    }

    /*FUNCIONES DE AUTENTICACION CON FIREBASE*/
    const loginGoogle = () => {
            console.log("inicio de registro con google");
            signInWithPopup(auth, provider)
            .then(respuesta => {
                console.log("Actualizacion de variables de estado con data devuelta por google");
                setUser(respuesta.user)
                setPhoto(respuesta.user.photoURL)
                setDisplayName(respuesta.user.displayName)
                setEmail(respuesta.user.email)
                setphoneNumber(respuesta.user.phoneNumber)
                setaccessToken(respuesta.user.accessToken)
                setuid(respuesta.user.uid)
                setemailVerified(respuesta.user.emailVerified)
                console.log("guardado de token y username en localstorage");
                localStorage.setItem('tokengoogle', respuesta.user.accessToken)
                localStorage.setItem('username', respuesta.user.displayName)
                console.log("inicializacion de variables obligatorias para el serializador");
                if(respuesta.user.phoneNumber === null){
                    respuesta.user.phoneNumber="000000000000"
                }
                if(respuesta.user.displayName === null){
                    respuesta.user.displayName="no registra"
                }
                if(respuesta.user.email === null){
                    respuesta.user.email="no@registra.com"
                }
                if(respuesta.user.photoURL === null){
                    respuesta.user.photoURL="no registra"
                }
                console.log("inicio de verificacion de correo");
                if(respuesta.user.emailVerified)
                {
                    console.log("correo verificado, registro en firebase exitoso, llamada a API de registro en BD");
                    llamarApi(respuesta.user.displayName,respuesta.user.email,respuesta.user.phoneNumber );
                }else{
                    sendEmailVerification(respuesta.user)
                    .then(() => {
                                    navigate('/VerificacionEmail'); 
                                    console.log('envio de verificacion');
                                })
                    .catch(() => {console.log('La verificacion no fue enviada')});
                }
            }).catch(err => {
                console.log("error en registro de firebase" + err)
            })
    }
    
    const loginFacebook = () => {
        signInWithPopup(auth, providerF)
            .then(respuesta => {
                console.log(respuesta);
                setUser(respuesta.user)
                setPhoto(respuesta.user.photoURL)
                setDisplayName(respuesta.user.displayName)
                setEmail(respuesta.user.email)
                setphoneNumber(respuesta.user.phoneNumber)
                setaccessToken(respuesta.user.accessToken)

                localStorage.setItem('tokenfacebook', accessToken)
                
                if(respuesta.user.emailVerified)
                {
                    navigate('/Bienvenido');
                    console.log("hacia la pagina de bienvenida");
                }else{
                    //const myUser = respuesta.user;
                    //navigate(`/VerificacionEmail?dato=${encodeURIComponent(JSON.stringify(myUser))}`); 
                    
                    sendEmailVerification(respuesta.user)
                    .then(() => {
                        navigate('/VerificacionEmail'); 
                        console.log('envio de verificacion');
                    })
                    .catch(() => {console.log('La verificacion no fue enviada')});
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const loginEmailpassword = () => {
        createUserWithEmailAndPassword(auth, emailuser, password)
            .then((respuesta) => {
                console.log(respuesta)
                if(respuesta.user.emailVerified)
                {
                    navigate('/Bienvenido');
                    console.log("hacia la pagina de bienvenida");
                }else{
                    sendEmailVerification(respuesta.user)
                    .then(() => {
                        navigate('/VerificacionEmail'); 
                        console.log('envio de verificacion');
                    })
                    .catch(() => {console.log('La verificacion no fue enviada')});
                }
            })
            .catch(err => {
                console.log(err)
            });
    }
    return(
        <div className="overallContainer">
            <div className="headerContainer">
                <StartHeader />
            </div>
            <div className="centerContainer">
                <div className="leftContainer"></div>
                <div className="center">
                    <div className="contLogin">
                        <LoginTitle />
                        <form className={styles.contForm} id='LoginForm'>
                            <label>
                                <input 
                                    type="text" 
                                    placeholder="Correo" 
                                    id='Email'
                                    onChange={handleEmailUserChange}
                                />
                            </label>
                            <label>
                                <input 
                                    type={showPwd ? "text" : "password"} 
                                    value={password}
                                    onChange={handlePasswordChange}
                                    id="password" 
                                    placeholder="Contraseña"
                                    required
                                />
                                <button className={styles.stylesIcon}
                                    type="button" 
                                    onClick={handleShowPasswordToggle}>
                                    {showPwd ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </label>
                            <input className="styleButtonPurple" type="button" value="Ingresar" onClick={loginEmailpassword}/>
                            <div className={styles.contLogout}>
                                <Link to="/OlvidasteContrasena" style={{ textDecoration: 'none' }}><ForgotPassword/></Link>
                                <p>Logout</p>
                            </div>
                        </form>
                        <div className={styles.contsocialbutton}>
                            <button onClick = {loginGoogle}><div className={styles.contbutton}><ButtonGoogle src={imggoogle}/><div className={styles.namesocial}>Google</div></div></button>
                            <button onClick = {loginFacebook}><div className={styles.contbutton}><ButtonFacebook src={imgfacebook}/><div className={styles.namesocial}>Facebook</div></div></button>
                        </div>
                        <Link to="/TerminosyCondiciones" style={{ textDecoration: 'none' }}><TermsText/></Link>
                        {errorState && <Mistakes message={errorState} />}
                    </div>
                </div>
                <div className="rightContainer"></div>
            </div>
        </div>
    )
    
}
export default Login;