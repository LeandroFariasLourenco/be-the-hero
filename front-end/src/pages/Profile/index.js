import React from 'react'
import Header from './../common/components/Header';
import { FiTrash2 } from 'react-icons/fi';
const Profile = () => {
  return (
    <section class="container">
      <Header />
      <h1 className="container__title">
        Casos cadastrados
      </h1>
      <ul className="container__list">
        <li className="container__list__item">
          <strong className="container__list__item__topic">CASO:</strong>
          <p className="container__list__item__content">
            Caso teste
          </p>
          <strong className="container__list__item__topic">DESCRIÇÃO:</strong>
          <p className="container__list__item__content">
            Caso teste
          </p>
          <strong className="container__list__item__topic">
            VALOR:
          </strong>
          <p className="container__list__item__content">
            R$120
          </p>

          <button className="container__list__item__exit" type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li className="container__list__item">
          <strong className="container__list__item__topic">CASO:</strong>
          <p className="container__list__item__content">
            Caso teste
          </p>
          <strong className="container__list__item__topic">DESCRIÇÃO:</strong>
          <p className="container__list__item__content">
            Caso teste
          </p>
          <strong className="container__list__item__topic">
            VALOR:
          </strong>
          <p className="container__list__item__content">
            R$120
          </p>

          <button className="container__list__item__exit" type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li className="container__list__item">
          <strong className="container__list__item__topic">CASO:</strong>
          <p className="container__list__item__content">
            Caso teste
          </p>
          <strong className="container__list__item__topic">DESCRIÇÃO:</strong>
          <p className="container__list__item__content">
            Caso teste
          </p>
          <strong className="container__list__item__topic">
            VALOR:
          </strong>
          <p className="container__list__item__content">
            R$120
          </p>

          <button className="container__list__item__exit" type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li className="container__list__item">
          <strong className="container__list__item__topic">CASO:</strong>
          <p className="container__list__item__content">
            Caso teste
          </p>
          <strong className="container__list__item__topic">DESCRIÇÃO:</strong>
          <p className="container__list__item__content">
            Caso teste
          </p>
          <strong className="container__list__item__topic">
            VALOR:
          </strong>
          <p className="container__list__item__content">
            R$120
          </p>

          <button className="container__list__item__exit" type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </section>
  )
}

export default Profile;
