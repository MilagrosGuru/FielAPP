import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { RotateLoader } from 'react-spinners';
import CentralText from '../../common/centralText/centralText'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: #b330d4;
`;

function LoadingSpinner({texto}) {
    return (
        <>
            <div className="loading-spinner">
                <RotateLoader css={override} size={15} color={'#b330d4'} loading={true} />
            </div>
            <div className="text-spinner">
                <CentralText text={texto} customStyles={true} delimiter="!" />
            </div>
            
        </>
        
    );
}

export default LoadingSpinner;