import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Logout(){
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        navigate('/');
    })
}
