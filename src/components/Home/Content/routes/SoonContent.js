import React from 'react';
import Smile from '../../../../assets/Home/smile.png'

const SoonContent = () => {
    return (
        <>
            <h2 className='home__soon-title'>У разработчика не хватило бюджета</h2>
            <p className='home__soon-subtitle'>Скоро всё будет !!!</p>
            <img className='home__soon-img' src={Smile} alt="smile sad"/>
        </>
    );
};

export default SoonContent;