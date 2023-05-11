import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function Welcome() {
    const navigate = useNavigate();
    const jwt_token = localStorage.getItem('token')
    
    async function fetchToken() {
        try {
            const response = await axios.get('http://127.0.0.1:5000/authorize', {
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
            fetchToken().then(response => 
                {
                    if (response.status === 200) {
                        localStorage.setItem('username', response.data.username)
                    }
                }
            );
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
                <p className="add-item-link">
                    Agregar producto{' '}
                    <Link to='/addItem' className="item-link">Agregar</Link>
                </p>
        </div>
        
    )
}
