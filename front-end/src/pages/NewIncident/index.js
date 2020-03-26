import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from './../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

const index = () => {
  return (
    <section className="incident">
      <div className="incident__wrapper">
        <div className="incident__wrapper__intro">
          <img className="incident__wrapper__intro__logo" src={logoImg} alt="" />
          <h1 className="incident__wrapper__intro__title">
            Cadastrar novo caso
          </h1>
          <p className="incident__wrapper__intro__text">
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>
          <Link className="incident__wrapper__intro__back" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
              Voltar para Home
          </Link>
        </div>
        <form className="incident__wrapper__form">
          <input type="text" placeholder="Titulo do caso" maxLength="60" />
          <textarea type="email" placeholder="Descrição" maxLength="250" />
          <input type="text" placeholder="Valor em reais" maxLength="14" />
          <button className="incident__wrapper__form__submit" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}

export default index
