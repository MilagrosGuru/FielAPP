import React from 'react';
import styles from "../../../Assests/css/common/otherimages/otherimages.module.scss";


class OtherImages extends React.Component{
    render(){
        return(
            <div className={styles.otherimg}>  
                <img src={this.props.img} alt="icono"></img>      
            </div>
        );
    }
}
export default OtherImages;