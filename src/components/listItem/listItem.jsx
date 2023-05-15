import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../config/baseUrl'


export function ListItem() {
    const navigate = useNavigate();
    const jwt_token = localStorage.getItem('token');
    let parsed_json;
    let nombresCosto = [];
    let mostrarElementos = [];
    let minValue = 9999;
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
                    const lista = response.data.list_of_products;
                    const obj = JSON.stringify(lista);
                    parsed_json = JSON.parse(obj);
                    if(minValue > Object.keys(parsed_json).length){
                        minValue = Object.keys(parsed_json).length;
                    }
                }
                for(let i = 0; i < Object.keys(parsed_json).length; i++){
                    nombresCosto.push([parsed_json[i].name, parsed_json[i].price]);
                }
                if(nombresCosto.length == minValue){
                    mostrar = nombresCosto;
                }
                console.log(mostrarElementos);
            }
            );
        } catch (error) {
            navigate('/welcome');
        }
    })
    return (
        <div className="add-item-container">
            <pre>Hola</pre>
        </div>
    );
}