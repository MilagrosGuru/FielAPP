import React, {useState} from 'react';
import firebase from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import imggoogle from "../../../Assests/images/google.png";
import imgfacebook from "../../../Assests/images/facebook.png";
import ButtonGoogle from '../../pages/Login/ButtonGoogle'
import ButtonFacebook from '../../pages/Login/ButtonFacebook'

import styles from "../../../Assests/css/centro/desktop/centerlogin.module.scss"

function Login(){
    const [password, setPassword] = useState('');
    const [showPwd, setshowPwd] = useState(false);
    const [user, setUser] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [displayname, setDisplayName] =  useState(null);
    const [email, setEmail] =  useState(null);
    const [phoneNumber, setphoneNumber] =  useState(null);
    const [accessToken, setaccessToken] =  useState(null);
    const [uid, setuid] =  useState(null);
    const provider = new GoogleAuthProvider();
    const providerF = new FacebookAuthProvider();
    const auth = getAuth();
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleShowPasswordToggle = () => {
        setshowPwd(!showPwd);
      };

    const loginGoogle = () => {
        
            signInWithPopup(auth, provider)
            .then(respuesta => {
                setUser(respuesta.user)
                setPhoto(respuesta.user.photoURL)
                setDisplayName(respuesta.user.displayName)
                setEmail(respuesta.user.email)
                setphoneNumber(respuesta.user.phoneNumber)
                setaccessToken(respuesta.user.accessToken)
                setuid(respuesta.user.uid)
                
                localStorage.setItem('tokengoogle', respuesta.user.accessToken)
                navigate('/Bienvenida');

            }).catch(err => {
                console.log(err)
            })
    }
    
    const loginFacebook = () => {
        signInWithPopup(auth, providerF)
            .then(respuesta => {
                console.log(respuesta.user)
                setUser(respuesta.user)
                setPhoto(respuesta.user.photoURL)
                setDisplayName(respuesta.user.displayName)
                setEmail(respuesta.user.email)
                setphoneNumber(respuesta.user.phoneNumber)
                setaccessToken(respuesta.user.accessToken)

                localStorage.setItem('tokenfacebook', respuesta.user.accessToken)
                navigate('/Bienvenida');

            }).catch(err => {
                console.log(err)
            })
    }
    return(
        <div className={styles.contLogin}>
            <h3>Ingresa tus datos</h3>
            <form className={styles.contForm}>
                <label>
                    <input type="text" placeholder="Usuario o correo"/>
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
               
                <input className={styles.styleButton} type="submit" value="Ingresar"/>
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
            
           
            {
                photo ?
                (
                    <div>
                        <img height="150" src={photo} alt="photo usuario"/>
                        <p>{displayname}</p>
                        <p>{email}</p>
                        <p>{phoneNumber}</p>
                    </div>
                ) :
                (
                    <span></span>
                )
            }
        </div>
    )
    
}
export default Login;