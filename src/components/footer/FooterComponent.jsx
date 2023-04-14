import React from 'react';
import './footer.css'
const FooterComponent = ({navigation}) => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <div className="footer__logo">
                    <div className="footer__logo-img">
                        <img src="./assets/icons/logo.svg" alt="logo" />
                    </div>
                    <div className="footer__contacts">
                        <h4 className='footer__contacts-heading'>Contacts</h4>
                        <a className='footer__contacts-tel' href='tel:+7 707 602 5959'>+7 707 602 5959</a>
                    </div>
                    <div className="footer__address">
                        <h4 className='footer__address-heading'>Address</h4>
                        <address className='footer__address-address'>117, Makataev str, Almaty, Kazakhstan</address>
                    </div>
                </div>
                <div className="footer__nav">
                    <ul className="footer__nav-list">
                        {navigation.map(list=>(
                            <li className='nav-list__text' key={list}>
                                <a className='nav-list__link' href='#'>{list}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;