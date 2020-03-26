import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import heroesImg from './../../assets/heroes.png';
import logoImg from './../../assets/logo.svg';

const Logon = () => {
  return (
    <section className="logon">
      <div className="logon__container">
        <img className="logon__container__logo" src={logoImg} alt="" />
        <form className="logon__container__form">
          <h1 className="logon__container__form__title">
            Faça seu logon
          </h1>
          <input
            type="text"
            placeholder="Sua ID"
            className="logon__container__form__id"
          />
          <button className="logon__container__form__submit" type="submit">
            Entrar
          </button>
          <Link to="/register" className="logon__container__form__forgot">
            <FiLogIn size={16} color="E02041" />
              Não tenho cadastro
          </Link>
        </form>
      </div>
      <img className="logon__banner" src={heroesImg} alt="heroes" />
    </section>
  )
}

export default Logon;