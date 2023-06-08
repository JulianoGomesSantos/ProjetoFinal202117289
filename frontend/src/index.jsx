import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskHome from './pages/taskHome';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Register } from './pages/register';
import { Login } from './pages/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/tasks',
    element: <TaskHome />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
