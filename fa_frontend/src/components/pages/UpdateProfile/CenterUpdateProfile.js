import React from 'react';
/*import { Link } from 'react-router-dom';*/

import styles from "../.././../Assests/css/pages/updateprofile/centerupdateprofile.module.scss"

function CenterUpdateProfile()
{
    let usuario = localStorage.getItem('username');
    const UsuarioMayusculas = usuario.toUpperCase();
    console.log(usuario);
    return(
        <main className={styles.contUpdateProfile}>  
            <section className={styles.contImageProfile}>
                
            </section>
            <section className={styles.contFormProfile}>
                
            </section> 
            <section className={styles.contButton}>
                <div className={styles.ContgenButton}>
                    
                </div>
            </section>
        </main>
    );
}
export default CenterUpdateProfile;