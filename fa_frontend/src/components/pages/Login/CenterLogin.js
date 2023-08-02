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

    const llamarApi = (displayname, photo, email, phonenumber) =>{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({full_name: displayname, name: "", last_name: "", document_type: "", document_number: "", telephone: phonenumber, email: email, born_date: "1981-02-10", department: "", city: "", address: "", gender: "", password: "", photo: photo })
            };
            /*http://127.0.0.1:8000/user/create*/
            console.log(process.env.NODE_ENV); 
            const baseURL = process.env.REACT_APP_BACKEND_URL+'user/create';
            console.log(baseURL); 
            /*fetch('https://5tknd9yyoh.execute-api.us-east-1.amazonaws.com/dev/user/create', requestOptions)*/
            fetch(baseURL, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result) 
                    navigate('/Bienvenida');
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
                    llamarApi(respuesta.user.displayName,respuesta.user.photoURL,respuesta.user.email,respuesta.user.phoneNumber );
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