import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config/baseUrl'
import './register.css';

export function Register() {
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
      const response = await axios.post(API_BASE_URL+'/register', { username, password });
      console.log(response)
      navigate('/');
    } catch (error) {
      alert('Invalid Username, Password');
      console.error(error);
    }
  };
  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Usuario:</label>
          <input
            type="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-control">
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
}
