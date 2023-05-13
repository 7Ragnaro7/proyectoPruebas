import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config/baseUrl'
import './login.css';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')){
      navigate('/welcome');
    }
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(API_BASE_URL+'/login', {}, {
        auth: {
          username: username,
          password: password
        }
      });
      console.log(response.data);
      localStorage.setItem('username', username)
      localStorage.setItem('token', response.data.token)
      navigate('/welcome');
    }
    catch (error) {
      alert('Invalid username or password');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Iniciar sesión</h2>
        <div className="login-input-container">
          <label className="login-label">
            Usuario:
            <input
              type='username'
              value={username}
              onChange={event => setUsername(event.target.value)}
              className="login-input"
            />
          </label>
          <label className="login-label">
            Contraseña:
            <input
              type='password'
              value={password}
              onChange={event => setPassword(event.target.value)}
              className="login-input"
            />
          </label>
        </div>
        <button type='submit' className="login-button">Iniciar sesión</button>
        <p className="login-signup-link">
          ¿No tienes una cuenta?{' '}
          <Link to='/register' className="login-link">Registrate aquí</Link>
        </p>
      </form>
    </div>
  );
}
