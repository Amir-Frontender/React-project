import React from 'react';
import './navigation.css'

const NavigationComponent = ({navigation}) => {
    return (
        <nav className="nav">
            <div className='nav__container container'>
                <ul className="nav__list">
                    {navigation.map(list=>(
                        <li className='nav__list-text' key={list}>
                            <a className='nav__list-link' href='#'>{list}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavigationComponent;