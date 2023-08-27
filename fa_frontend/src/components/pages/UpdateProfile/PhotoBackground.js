import React from 'react';
import styles from "../../../Assests/css/pages/updateprofile/photobackground.module.scss";


class PhotoBackground extends React.Component{
    render(){
        return(
            <div className={styles.photostyle}>  
                <img src={this.props.src} alt="Photo"></img>     
            </div>
        );
    }
}
export default PhotoBackground;