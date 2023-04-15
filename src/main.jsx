import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';

import Root from './routes/Root';
import './scss/index.scss';

const router = createBrowserRouter([
  {
    path: '/Space-tourism-website/',
    element: <Root />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
