import React from 'react';

import firebase from '../../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import styles from "../../../Assests/css/pages/welcome/welcome.module.scss"

class Welcome extends React.Component{
    constructor(){
        super();
    
        this.state = {
            loggedIn: "no-logueado",
            user:{},
        };
    }
   /* userVerification = () => {
        if (!users) {
            useNavigate('/Login'); 
        }
    };*/
    render(){
        /*this.userVerification();*/
        return(
            <div className={styles.estiloCentro}>   
                Página de Bienvenida
            </div>
        );
    
    }
}
export default Welcome;