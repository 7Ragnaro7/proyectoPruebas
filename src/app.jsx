import { Routes, Route } from 'react-router-dom';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { AdmRegister } from './components/register-admin/register-admin';

function App () {
    return(
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/register/admin' element={<AdmRegister/>} />
        </Routes>
    );
}

export default App;