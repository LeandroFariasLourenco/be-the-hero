import React from 'react'
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from './../../../assets/logo.svg';

const Header = () => {
  return (
    <header class="header">
      <img className="header__logo" src={logoImg} alt="Be the hero" />
      <span className="header__title">
        Bem vinda, APAD
      </span>
      <Link className="header__new" to="/incidents/new">Cadastrar novo caso</Link>
      <button className="header__logout" type="button">
        <FiPower size={18} color="#E02041" />
      </button>
    </header>
  )
}

export default Header;
