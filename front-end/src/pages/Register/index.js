import React , { useState } from 'react'
import { Link , useHistory } from 'react-router-dom';
import logoImg from './../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import api from './../../services/api';

const Register = () => {
  const [nome , setNome] = useState(''),
    [email , setEmail] = useState(''),
    [telefone , setTelefone] = useState(''),
    [cidade , setCidade] = useState(''),
    [uf , setUf] = useState('');

  const history = useHistory();

  async function handleRegister (event) {
    event.preventDefault(); 
    const inputs = {nome, email, telefone, cidade, uf};

    try {
      const response = await api.post('ongs', inputs);
      alert(`Seu id de acesso é:${response.data.ID}`); 
      history.push('/');
    } catch (e) {
      alert(`Ocorreu um erro, tente novamente.`);
    }
  }

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
        <form className="register__wrapper__form" onSubmit={handleRegister}>
          <input
            value={nome}
            onChange={event => setNome(event.target.value)} 
            type="text" 
            placeholder="Nome da ONG" 
            maxLength="60"
          />
          <input 
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email" 
            placeholder="Email" 
            maxLength="60"
          />
          <input 
            value={telefone}
            onChange={event => setTelefone(event.target.value)}
            type="text" 
            placeholder="Telefone" 
            maxLength="14"
          />
          <div className="register__wrapper__form__group">
            <input 
              value={cidade}
              onChange={event => setCidade(event.target.value)}
              type="text" 
              placeholder="Cidade" 
              maxLength="60"
            />
            <input 
              value={uf}
              onChange={event => setUf(event.target.value)}
              type="text" 
              placeholder="UF"
              maxLength="2" 
              style={{ width: 80 }}
            />
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
