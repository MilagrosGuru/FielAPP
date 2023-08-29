/*import React from 'react';
import styles from "../../../Assests/css/pages/firstpage/btnhaveaccount.module.scss";


class BtnHaveAccount extends React.Component{
    render(){
        return(
            <input className="styleButtonPurple" type="button" value="Ya tengo una cuenta" />
        );
    }
}
export default BtnHaveAccount;*/
import React from 'react';
import styles from "../../../Assests/css/pages/firstpage/btnhaveaccount.module.scss";
import {useNavigate} from 'react-router-dom';


function  BtnHaveAccount(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Login"); 
    };
    return(
        <button className="styleButtonPurple" onClick={handleClick}>
            <span className={styles.textButton}>Ya tengo una cuenta</span>
        </button>
    );
}
export default  BtnHaveAccount;