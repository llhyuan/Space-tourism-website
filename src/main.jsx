import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Destination from './routes/destination';

import Root from './routes/Root';
import './scss/index.scss';

const router = createBrowserRouter([
  {
    path: '/Space-tourism-website/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'destination',
        element: <Destination />,
      },
      {
        path: 'crew',
        element: <div>this is a test comonent</div>,
      },
      {
        path: 'technology',
        element: <div>this is a test comonent</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
