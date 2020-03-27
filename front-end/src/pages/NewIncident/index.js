import React, { useState } from 'react'
import { Link , useHistory} from 'react-router-dom';
import logoImg from './../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import api from './../../services/api';

const NewIncident = () => {
  const [title, setTitle] = useState(''),
  [description, setDescription] = useState(''),
  [price, setPrice] = useState(''),
  history = useHistory(),
  ongId = localStorage.getItem('ongId');

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      titulo: title,
      descricao: description,
      custo: price
    };

    try {
      console.log(data);
      api.post('incidents', data , {
        headers: {
          authorization: ongId
        }
      })
      history.push('/profile');
    } catch (e) {
      alert('Erro ao cadastrar, tente novamente');
    }
  }

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
        <form onSubmit={handleSubmit} className="incident__wrapper__form">
          <input
            onChange={event => { setTitle(event.target.value) }}
            value={title}
            type="text"
            placeholder="Titulo do caso"
            maxLength="60"
            required="required"
          />
          <textarea
            onChange={event => { setDescription(event.target.value) }}
            value={description}
            type="text"
            placeholder="Descrição"
            maxLength="250"
            required="required"
          />
          <input
            onChange={event => { setPrice(parseInt(event.target.value)) }}
            value={price}
            type="text"
            placeholder="Valor em reais"
            maxLength="14"
            required="required"
          />
          <button className="incident__wrapper__form__submit" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewIncident
