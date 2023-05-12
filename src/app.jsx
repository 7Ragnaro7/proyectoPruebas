import { Routes, Route } from 'react-router-dom';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { AdmRegister } from './components/register-admin/register-admin';
import { Welcome } from './components/welcome/welcome';
import { Logout } from './components/logout/logout';
import { Item } from './components/createItem/item';
import { ListItem } from './components/listItem/listItem';

function App () {
    return(
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/welcome' element={<Welcome/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/register/admin' element={<AdmRegister/>} />
            <Route path='/logout' element={<Logout/>} />
            <Route path='/addItem' element={<Item/>} />
            <Route path='/listItem' element={<ListItem/>} />
        </Routes>
    );
}

export default App;
