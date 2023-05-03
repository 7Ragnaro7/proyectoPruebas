import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/login/login.jsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom";


const login = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={login} />
  </React.StrictMode>
)
