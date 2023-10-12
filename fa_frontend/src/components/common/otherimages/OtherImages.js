import React from 'react';
import styles from "../../../Assests/css/common/otherimages/otherimages.module.scss";
import { useNavigate } from 'react-router-dom';

const OtherImages = (props) => {
    const { img, linkTo } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        if (linkTo) {
            navigate(linkTo);
        }
    };
    return (
        <div className={styles.otherimg} onClick={handleClick}>
            <img src={img} alt="Imagen" />
        </div>
    );
};
export default OtherImages;
