import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from './../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

const Register = () => {
  return (
    <section className="register">
      <div className="register__wrapper">
        <div className="register__wrapper__intro">
          <img className="register__wrapper__intro__logo" src={logoImg} alt="" />
          <h1 className="register__wrapper__intro__title">
            Cadastro
          </h1>
          <p className="register__wrapper__intro__text">
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os
            casos da sua ONG.
          </p>
          <Link className="register__wrapper__intro__back" to="/">
            <FiArrowLeft size={16} color="#E02041" />
              Voltar para Logon
          </Link>
        </div>
        <form className="register__wrapper__form">
          <input type="text" placeholder="Nome da ONG" maxLength="60"/>
          <input type="email" placeholder="Email" maxLength="60"/>
          <input type="text" placeholder="Whatsapp" maxLength="14"/>
          <div className="register__wrapper__form__group">
            <input type="text" placeholder="CIdade" maxLength="60"/>
            <input type="text" placeholder="UF" maxLength="2" style={{ width: 80 }}/>
          </div>
          <button className="register__wrapper__form__submit" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Register
