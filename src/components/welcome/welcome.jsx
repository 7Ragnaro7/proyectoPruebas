import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../../config/baseUrl';
import './welcome.css';

export function Welcome() {
  const navigate = useNavigate();
  const jwt_token = localStorage.getItem('token');

  async function fetchToken() {
    try {
      const response = await axios.get(API_BASE_URL+'/authorize', {
        headers: {
          'x-access-tokens': jwt_token
        }
      });
      return response;
    } catch (error) {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      navigate('/');
    }
  }

  useEffect(() => {
    if (!jwt_token || jwt_token === '') {
      navigate('/');
    }
    try {
      fetchToken().then(response => {
        if (response.status === 200) {
          localStorage.setItem('username', response.data.username)
        }
      });
    } catch (error) {
      console.log("ERROR");
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      navigate('/');
    }
  })

  return (
    <div className="welcome-container">
      <h1>
        Welcome {localStorage.getItem('username')}!
      </h1>
      <div className="button-container">
        <Button variant="contained" color="primary" component={Link} to="/addItem" className="add-item-button">
          Agregar producto
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/listItem" className="list-item-button">
          Listar producto
        </Button>
      </div>
    </div>
  )
}
