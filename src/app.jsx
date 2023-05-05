import { Routes, Route } from 'react-router-dom';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { AdmRegister } from './components/register-admin/register-admin';
import { Welcome } from './components/welcome/welcome';
import { Logout } from './components/logout/logout';

function App () {
    return(
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/welcome' element={<Welcome/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/register/admin' element={<AdmRegister/>} />
            <Route path='/logout' element={<Logout/>} />
        </Routes>
    );
}

export default App;
