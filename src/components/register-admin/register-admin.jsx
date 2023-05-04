import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register-admin.css';

export function AdmRegister() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [admin_key, setAdmin_key] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/');
    try {
      const auth = { username, password, admin_key };
      const response = await axios.post('/register', { auth });
      console.log(response)
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
          <label>Admin key:</label>
          <input
            type="password"
            value={admin_key}
            onChange={(event) => setAdmin_key(event.target.value)}
          />
        </div>
        <div className="form-control">
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
}
