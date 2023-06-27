import './Promo.css';

function Promo() {
  return(
    <section className='promo'>
      <div className='promo__content'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <ul className='promo__list'>
          <li className='promo__list-item'><a className='promo__list_link' href='#about-project'>О проекте</a></li>
          <li className='promo__list-item'><a className='promo__list_link' href='#techs'>Технологии</a></li>
          <li className='promo__list-item'><a className='promo__list_link' href='#about-me'>Студент</a></li>
          </ul>
          </div>
          </section>
          )
}

export default Promo;