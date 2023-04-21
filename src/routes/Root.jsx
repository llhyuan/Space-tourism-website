import { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import '../scss/_Root.scss';
import Navbar from '../components/Navbar.jsx';

export const NavContext = createContext(null);

export default function Root() {
  const [navStatus, setNavStatus] = useState(0);

  return (
    <>
      <NavContext.Provider value={{navStatus, setNavStatus}}>
        <Navbar />
        <Outlet />
      </NavContext.Provider>
    </>
  );
}
