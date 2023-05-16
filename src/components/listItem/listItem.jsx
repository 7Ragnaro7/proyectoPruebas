import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config/baseUrl';
import './listItem.css';

export function ListItem() {
  const navigate = useNavigate();
  const jwt_token = localStorage.getItem('token');
  const [elementosMostrados, setElementosMostrados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!jwt_token || jwt_token === '') {
      navigate('/');
      return;
    }

    async function fetchData() {
      try {
        const options = {
          method: 'GET',
          url: API_BASE_URL + '/products',
          headers: {
            'x-access-tokens': jwt_token
          }
        };

        const response = await axios.request(options);

        if (response.status === 200) {
          const lista = response.data.list_of_products;
          const nombresCostoPeso = lista.map((elemento) => {
            return { nombre: elemento.name, precio: elemento.price, peso: elemento.weight, unidad: elemento.unit };
          });

          setElementosMostrados(nombresCostoPeso);
          setIsLoading(false);
        }
      } catch (error) {
        navigate('/welcome');
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="list-item-container">
      {elementosMostrados.map((elemento, index) => (
        <div key={index} className="elemento">
          <p className="nombre">{elemento.nombre}</p>
          <p className="precio">{elemento.precio}</p>
          <p className="peso">{`${elemento.peso} ${elemento.unidad}`}</p>
        </div>
      ))}
    </div>
  );
}
