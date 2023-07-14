import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/myPhoto.jpg';

const AboutMe = () => {
    return (
        <section id='student' className="about-me" >
            <h4 className='about-me__title'>Студент</h4>
            <div className="about-me__content">
                <div className="about-me__text-block">
                    <p className="about-me__text-block-title">Мария</p>
                    <p className="about-me__text-block-subtitle">Фронтенд-разработчик, 26 лет</p>
                    <p className="about-me__text-block-text"> живу в Москве, закончила бакалавриат в Высшей школе экономике, магистратуру в МГЮА им. Кутафина по направлению юриспруденция. Работаю в Банке Тинькофф налоговым консультантом, с 2023 года решила начать учиться во фронтенд-разработке.</p>
                    <a className="about-me__text-block-link" href='https://github.com/MariaSizova' target='_blank' rel="noreferrer">Github</a>
                </div>
                <img className='about-me__image' src={myPhoto} alt='myPhoto' />
            </div>
        </section>

    )
};

export default AboutMe;