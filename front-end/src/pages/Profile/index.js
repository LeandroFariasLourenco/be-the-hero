import React, { useEffect, useState } from 'react'
import Header from './../common/components/Header';
import { FiTrash2 } from 'react-icons/fi';
import api from './../../services/api';

const Profile = () => {
  const [incidents, setIncidents] = useState([]),
    ongId = localStorage.getItem('ongId');

  useEffect(() => {
    api.get('http://localhost:3333/profile', {
      headers: {
        authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    });
  }, [ongId]);

  async function handleDeleteIncident(incidentId) {
    try {
      await api.delete(`incidents/${incidentId}`, {
        headers: {
          authorization: ongId
        }
      })
      setIncidents(incidents.filter( incident => incident.id !== incidentId ));
    } catch (e) {
      alert('Erro ao deletar, tente novamente');
    }
  }

  return (
    <section className="container">
      <Header />
      <h1 className="container__title">
        Casos cadastrados
      </h1>
      <ul className="container__list">
        {incidents.map(incident => (
            <li key={incident.id} className="container__list__item">
              <strong className="container__list__item__topic">CASO:</strong>
              <p className="container__list__item__content">
                {incident.DS_TITULO}
              </p>
              <strong className="container__list__item__topic">DESCRIÇÃO:</strong>
              <p className="container__list__item__content">
                {incident.DS_DESCRICAO}
              </p>
              <strong className="container__list__item__topic">VALOR:</strong>
              <p className="container__list__item__content">
                {Intl.NumberFormat('pt-BR' , { style : 'currency' ,  currency : 'BRL'}).format(incident.VL_CUSTO)}
              </p>
              <button className="container__list__item__exit" onClick={() => handleDeleteIncident(incident.id)} type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Profile;
