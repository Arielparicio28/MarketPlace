// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import './Form.css';
import ReCAPTCHA from 'react-google-recaptcha';

 export const Form = () => {
  const captcha = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      alert('Gracias!Su mensaje ha sido enviado');
      captcha.current.reset(); // Reiniciar el reCAPTCHA
      e.target.reset(); // Reiniciar el formulario después del envío
    } else {
      alert('Verfica que no eres un robot');
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type='text' />
        <label>Email</label>
        <input type='email' />
        <label>Contraseña</label>
        <input type='text' />
        <label>Message</label>
        <textarea rows='6' placeholder='Please write your message' />
        <div className='recaptcha'>
          <ReCAPTCHA
            ref={captcha}
            sitekey='6LcHSjEmAAAAADpYYDwgZFzzNw5nBlrt5VfXFiVc'
          />
        </div>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

