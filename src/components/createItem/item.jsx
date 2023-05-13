import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config/baseUrl'
import './item.css';

export function Item() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const navigate = useNavigate();
    const jwt_token = localStorage.getItem('token');
    const options = {
        method: 'POST',
        url: API_BASE_URL+'/product/create',
        headers: {
          'Content-Type': 'application/json',
          'x-access-tokens': jwt_token
        },
        data: {name: name, price: price, weight: weight, unit: unit}
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.request(options)
            console.log(response.data);
            navigate('/welcome');
        }
        catch(error){
            console.error(error);
        }
    };

    return(
        <div className="add-item-container">
            <form onSubmit={handleSubmit} className="add-item-form">
                <h2 className="name-title">Nombre producto</h2>
                    <div className="product-input-container">
                        <label className="name-label">
                            Nombre producto:
                            <input
                                type='name'
                                value={name}
                                onChange={event => setName(event.target.value)}
                                className="name-input"
                            />
                        </label>
                        <label className="price-label">
                            Precio del producto:
                            <input
                                type='price'
                                value={price}
                                onChange={event => setPrice(event.target.value)}
                                className="price-input"
                            />
                        </label>
                        <label className="weight-label">
                            Peso del producto:
                            <input
                                type='weight'
                                value={weight}
                                onChange={event => setWeight(event.target.value)}
                                className="weight-input"
                            />
                        </label>
                        <label className="unit-label">
                            Unidad del producto:
                            <input
                                type='unit'
                                value={unit}
                                onChange={event => setUnit(event.target.value)}
                                className="unit-input"
                            />
                        </label>
                    </div>
                    <button type='submit' className='add-product-button'>Agregar</button>
            </form>
        </div>
    );
}