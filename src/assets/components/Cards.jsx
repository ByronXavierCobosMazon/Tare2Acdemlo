import React from 'react';

const Cards = ({data}) => {
    return (
        <div className='div--cards'>
            <picture className='div__picture'>
                <img  className='div__picture--img' src={`${data.strDrinkThumb}`} alt="" />
            </picture>
            <div className='div__div--textCards'>
                <h3 className='div__div--h3'>{data.strDrink}</h3>
                <p className='div__div--p'>{data.strInstructions}</p>
            </div>            
        </div>
    );
};

export default Cards;