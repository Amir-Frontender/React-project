import React from 'react';
import './cards.css'

const CardsComponent = ({cards}) => {
    return (
        <div className='cards'>
            <div className="cards__container container">
                <div className="cards__header">
                    <h2 className="cards__heading">Recomends</h2>
                    <div className='line'></div>
                </div>
                <div className='cards__grid'>
                    {
                        cards.map((elem, index)=>(
                            <div className="cards__block">
                                <div className="block__img">
                                    <img src={elem.img} alt={elem.name} />
                                </div>
                                <div className='block__text'>
                                    <div className='block__text-items'>
                                        <span className='block__model'>{elem.model}</span>
                                        <span className='block__position'>{elem.position}</span>
                                        <span className='block__name'>{elem.name}</span>
                                    </div>
                                    <button className='block__btn btn'>{elem.price} ₸</button>
                                </div>
                            </div>
                        ))
                    }
                            <div className="cards__offer">
                                <h3 className='cards__offer-header'>-25%</h3>
                                <p className='cards__offer-text'>for second purchase</p>
                                <div className="cards__offer-img">
                                    <img src="./assets/img/2x.png" alt="img" />
                                </div>

                            </div>
                </div>
                
            </div>
        </div>
    );
};

export default CardsComponent;