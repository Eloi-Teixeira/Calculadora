import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ClockSvg } from '../assets/icons/clock.svg';
import { ReactComponent as EmailSvg } from '../assets/icons/email.svg';

const Contato = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enviado');
  };
  return (
    <section className="section-container">
      <h1>Fale Conosco</h1>
      <p>
        Estamos aqui para ajudar! Se você tiver dúvidas, sugestões ou precisar
        de suporte, entre em contato conosco pelos canais abaixo:
      </p>
      <p>Entre em contato por e-mail</p>
      <div className="section-contato">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" autoComplete="off" required/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoComplete="on" required/>
          <label htmlFor="message">Mensagem</label>
          <textarea name="message" id="message" autoComplete="off" required></textarea>
          <button>Enviar</button>
        </form>
        <span className="separator-vertical"></span>
        <div>
          <p>
            <EmailSvg />
            <strong>Email de Contato</strong>
          </p>
          <ul>
            <li>
              <Link to="mailto:oline9473@gmail.com">oline9473@gmail.com</Link>
            </li>
          </ul>
          <p>
            <ClockSvg />
            <strong>Horário para atendimento</strong>
          </p>
          <ul>
            <li>Sábado e domingo: 14:00 ás 18:00</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contato;
