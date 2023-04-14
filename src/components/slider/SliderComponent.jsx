import React, { useState } from 'react';
import './slider.css'

const SliderComponent = ({sales}) => {
    const sliderClass = 'slider__position-round'
    const [index, setIndex]= useState(0)
    const changeSlide = (i)=>{
        setIndex(i)
    }
    return (
        <section className='slider'>
            <div className="slider__container">
                <ul className="slider__list">
                    {sales.map(elem=>(
                        <li key={elem.name} className='elem' style={{transform: `translateX(-${1330*index}px)`}}>
                            <div className="elem__block" style={{background: elem.bgc}}>
                                <div className="elem__text">
                                    <h2 className='elem__text-header' style={{color: elem.color}}>-{elem.discount}%</h2>
                                    <p className="elem__text-name" style={{color: elem.color}}>{elem.name}</p>
                                </div>
                                <div className="elem__img">
                                    <img src={elem.img} alt="img" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="slider__position">
                    {sales.map((round,i)=>(
                        <span className={i === index ? 'slider__position-round active' : 'slider__position-round'} key={round.name}
                            onClick={()=>{changeSlide(i)}}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SliderComponent;