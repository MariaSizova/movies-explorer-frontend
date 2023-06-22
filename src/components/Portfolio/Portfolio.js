import '../Portfolio/Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h4 className='portfolio__works-title'>Портфолио</h4>
      <ul className='portfolio__works'>
        <li className='portfolio__work'>
          <a
            href='https://mariasizova.github.io/how-to-learn/'
            className='portfolio__work-link'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <span className='portfolio__arrow'>&rarr;</span>
          </a>
        </li>
        <li className='portfolio__work'>
          <a
            className='portfolio__work-link'
            href='https://mariasizova.github.io/russian-travel/index.html'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <span className='portfolio__arrow'>&rarr;</span>
          </a>
        </li>
        <li className='portfolio__work'>
          <a
            className='portfolio__work-link'
            href='https://mariasizova.github.io/express-mesto-gha/'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <span className='portfolio__arrow'>&rarr;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;