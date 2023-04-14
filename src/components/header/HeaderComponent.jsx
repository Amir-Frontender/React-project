import React, { useState } from 'react';
import './header.css'
const HeaderComponent = () => {
    const [city, setCity] = useState('City')
    const addCity =(e)=>{
        e.preventDefault()
        setCity(e.target.input.value)
    }
    return (
        <div className='header'>
            <div className="header__container container">
                <div className="header__logo">
                    <div className="header__logo-img">
                        <a href='#'><img src="./assets/icons/logo.svg" alt="" /></a>
                    </div>
                    <div className="header__user-city">
                        <h6>{city}</h6>
                    </div>
                </div>
                <div className="header__city">
                    <form onSubmit={(e)=> addCity(e)} className='header__city-form'>
                        <input id='input' className='header__city-input' type="text" placeholder='Type your city' />
                        <button className='header__city-btn btn'>Choose city</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;