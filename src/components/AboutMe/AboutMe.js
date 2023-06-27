import SectionTitle from "../SectionTitle/SectionTitle";
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/about-me-photo.JPG';
import './AboutMe.css';

function AboutMe() {
  return(
    <section id='about-me' className="about-me">
      <div className="about-me__content">
        <SectionTitle text='Студент' />
        <article className="about-me__info">
			<div className="about-me__information">
          <h3 className="about-me__title">Мария</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 26 лет</p>
          <p className="about-me__bio">Я живу в Москве, закончила бакалавриат в Высшей школе экономике, магистратуру в МГЮА им. Кутафина по направлению юриспруденция. Работаю в Банке Тинькофф налоговым консультантом, с 2023 года решила начать учиться во фронтенд-разработке.</p>
          <a className="about-me__github-link" href="https://github.com/MariaSizova" target='_blank' rel='noreferrer'>Github</a>
			 </div>
          <img className="about-me__photo" src={photo} alt="Фото автора проекта" />
        </article>
        <Portfolio />
      </div>
    </section>
  )
}

export default AboutMe;