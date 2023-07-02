import { Link } from 'react-router-dom';
import './AuthPage.css';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import AuthTitle from '../AuthTitle/AuthTitle';

function AuthPage({ headerText, buttonText, paragraphText, url, linkText, name, onSubmit, isLoading, loadingText, values, formValid, isRequestSuccessful, errorText, onCleanErrorText, children, }) {
  return (
    <main className='authpage'>
      <div className='authpage__content'>
        <Logo />
        <AuthTitle headerText={headerText} />
      </div>
      <Form
        buttonText={buttonText}
        type={name}
        name={`${name}`}
        onSubmit={onSubmit}
        isLoading={isLoading}
        loadingText={loadingText}
        values={values}
        formValid={formValid}
        isRequestSuccessful={isRequestSuccessful}
        errorText={errorText}
      >
        {children}
      </Form>
      <div className='authpage__container'>
        <p className='authpage__text'>{`${paragraphText} зарегистрированы?`}</p>
        <Link to={url} className='authpage__link' onClick={onCleanErrorText}>
          {linkText}
        </Link>
      </div>
    </main>
  );
}

export default AuthPage;