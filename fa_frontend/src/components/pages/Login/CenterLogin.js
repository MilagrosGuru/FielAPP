import React, {useState} from 'react';

import firebase from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import imggoogle from "../../../Assests/images/google.png";
import imgfacebook from "../../../Assests/images/facebook.png";
import ButtonGoogle from './ButtonGoogle'
import ButtonFacebook from './ButtonFacebook'

import Mistakes from "../Mistakes/Mistake"

import styles from "../../../Assests/css/pages/login/centerlogin.module.scss"

function Login(){
    
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

    const provider = new GoogleAuthProvider();
    const providerF = new FacebookAuthProvider();
    const auth = getAuth();
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailUserChange = (event) => {
        setEmailUser(event.target.value);
    };

    const handleShowPasswordToggle = () => {
        setshowPwd(!showPwd);
    };

    const llamarApi = (displayname, email, phonenumber) =>{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({full_name: displayname, name: "", last_name: "", document_type: "", document_number: "", telephone: phonenumber, email: email, born_date: "1981-02-10", department: "", city: "", address: "", gender: "", password: "", photo: "" })
            };
            console.log(process.env.NODE_ENV); 
            const baseURL = process.env.REACT_APP_BACKEND_URL+'user/create';
            console.log(baseURL); 
            
            /*fetch('http://127.0.0.1:8000/user/create', requestOptions)*/
            fetch(baseURL, requestOptions)
                .then(response =>{ 
                    /*response.json()*/
                    
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
                    console.log(result); 
                    navigate('/Bienvenido');
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
                });
    }

    const loginGoogle = () => {
        
            signInWithPopup(auth, provider)
            .then(respuesta => {

                /*asignacion de valores a variables de estado*/

                setUser(respuesta.user)
                setPhoto(respuesta.user.photoURL)
                setDisplayName(respuesta.user.displayName)
                setEmail(respuesta.user.email)
                setphoneNumber(respuesta.user.phoneNumber)
                setaccessToken(respuesta.user.accessToken)
                setuid(respuesta.user.uid)
                setemailVerified(respuesta.user.emailVerified)

                /*se guarda en local el acces token*/

                localStorage.setItem('tokengoogle', respuesta.user.accessToken)
                localStorage.setItem('username', respuesta.user.displayName)


                /*validacion de campos vacios*/

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

                /*llamar api y verificacion de correo*/

                if(respuesta.user.emailVerified)
                {
                    llamarApi(respuesta.user.displayName,respuesta.user.email,respuesta.user.phoneNumber );
                   // navigate('/Bienvenida');
                }else{
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
    
    const loginFacebook = () => {
        signInWithPopup(auth, providerF)
            .then(respuesta => {
                
                setUser(respuesta.user)
                setPhoto(respuesta.user.photoURL)
                setDisplayName(respuesta.user.displayName)
                setEmail(respuesta.user.email)
                setphoneNumber(respuesta.user.phoneNumber)
                setaccessToken(respuesta.user.accessToken)

                localStorage.setItem('tokenfacebook', respuesta.user.accessToken)
                
                if(respuesta.user.emailVerified)
                {
                    navigate('/Bienvenida');
                    console.log("hacia la pagina de bienvenida");
                }else{
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
                    navigate('/Bienvenida');
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
        <div className={styles.contLogin}>
            {errorState && <Mistakes message={errorState} />}
            <h3>Ingresa tus datos</h3>
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
               
                <input className={styles.styleButton} type="button" value="Ingresar" onClick={loginEmailpassword}/>
                <div className={styles.contLogout}>
                <p>Olvidaste la contraseña?</p>
                <p>Logout</p>
            </div>
            </form>
            
            <div className={styles.contsocialbutton}>
                <button onClick = {loginGoogle}><div className={styles.contbutton}><ButtonGoogle src={imggoogle}/><div className={styles.namesocial}>Google</div></div></button>
                <button onClick = {loginFacebook}><div className={styles.contbutton}><ButtonFacebook src={imgfacebook}/><div className={styles.namesocial}>Facebook</div></div></button>
            </div>
            <div className={styles.contterms}>
                <p>Al registrarse en FielApp, aceptaras nuestros <span>Términos y Póliticas de privacidad</span></p>
            </div>
        </div>
    )
    
}
export default Login;