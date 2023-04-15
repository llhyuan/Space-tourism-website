import { Outlet } from 'react-router-dom';
import '../scss/_Root.scss';
import Navbar from '../components/Navbar.jsx';

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
