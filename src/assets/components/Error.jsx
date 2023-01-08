import React from 'react';

const Error = ({imgError,textError}) => {
    return (
        <div className='div__error'>
            <img className='div__img--error' src={`${imgError}`} alt="" />
            <h3 className='div__h3--error'>{textError}</h3>
        </div>
    );
};

export default Error;