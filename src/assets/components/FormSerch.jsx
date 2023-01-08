import React from 'react';

const FormSerch = ({ setHook, textInput, textButton}) => {

    const serchTerm = (e) => {
        e.preventDefault()
        setHook(e.target[0].value)
    }

    return (
            <form className='form' onSubmit={(e) => serchTerm(e)}>
                <input className='form__input' type="text" placeholder={`${textInput}`} />
                <button className='form__button' type='submit'>{textButton}</button>
            </form>   
    );
};

export default FormSerch;