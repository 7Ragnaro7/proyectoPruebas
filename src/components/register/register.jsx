import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';

export function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/');
    try {
      const auth = { username, password };
      const response = await axios.post('/register', { auth });
    } catch (error) {
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
