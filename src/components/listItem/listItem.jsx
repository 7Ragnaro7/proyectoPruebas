import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config/baseUrl'


export function ListItem() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const navigate = useNavigate();
    const jwt_token = localStorage.getItem('token');
    let lista = '';
    const options = {
        method: 'GET',
        url: API_BASE_URL+'/products',
        headers: {
            'x-access-tokens': jwt_token
        }
    };
    async function fetchData() {
        try {
            const response = await axios.request(options);
            return response;
        } catch (error) {
            navigate('/welcome');
        }
    }
    useEffect(() => {
        if (!jwt_token || jwt_token === '') {
            navigate('/');
        }
        try {
            fetchData().then(response => {
                if (response.status === 200) {
                    lista = response.data.list_of_products;
                    console.log(lista);
                }
            }
            );
        } catch (error) {
            navigate('/welcome');
        }
    })
    return (
        <div className="add-item-container">
            <pre>Hola{JSON.stringify(lista, null, 2)}</pre>
        </div>
    );
}