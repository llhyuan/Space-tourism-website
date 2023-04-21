import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import Crew, { loader as crewLoader } from './routes/Crew';
import Destination, { loader as desLoader } from './routes/destination';
import Root from './routes/Root';
import Technology, {loader as techLoader} from './routes/Technology';

import './scss/index.scss';

const router = createBrowserRouter([
  {
    path: '/space-tourism-website',
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
        loader: desLoader,
      },
      {
        path: 'crew/:crewId',
        element: <Crew />,
        loader: crewLoader,
      },
      {
        path: 'technology/:termId',
        element: <Technology />,
        loader: techLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
