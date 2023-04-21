import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {NavContext} from '../routes/Root';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import '../scss/_Navbar.scss';

function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false);
  const {navStatus, setNavStatus} = useContext(NavContext);
  const navigate = useNavigate();
  
  return (
    <header className='navbar'>
      <svg
        className='logo'
        width='60'
        height='60'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='20' cy='20' r='20' fill='white' />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40C20 40 20 20 39.9999 20C20 20 20 0 20 0Z'
          fill='#0B0D17'
        />
      </svg>
      <div className='decbar'></div>
      {!menuStatus ? (
        <FontAwesomeIcon
          className='toggle-button mobile'
          onClick={() => {
            setMenuStatus(!menuStatus);
          }}
          icon={faBars}
        />
      ) : (
        <nav className='mobile'>
          <FontAwesomeIcon
            className='toggle-button'
            onClick={() => {
              setMenuStatus(!menuStatus);
            }}
            icon={faX}
          />
          <ul className='navlinks'>
            <li
              className={'navtext' + (navStatus === 0 ? ' active' : '')}
              onClick={() => {
                setNavStatus(0);
                navigate("home");
              }}
            >
                <p className='bold'>00</p>
                <p>HOME</p>
            </li>
            <li
              className={'navtext' + (navStatus === 1 ? ' active' : '')}
              onClick={() => {
                setNavStatus(1);
                navigate("destination");
              }}
            >
                <p className='bold'>01</p>
                <p>DESTINATION</p>
            </li>
            <li
              className={'navtext' + (navStatus === 2 ? ' active' : '')}
              onClick={() => {
                setNavStatus(2);
                navigate("crew/0");
              }}
            >
                <p className='bold'>02</p>
                <p>CREW</p>
            </li>
            <li
              className={'navtext' + (navStatus === 3 ? ' active' : '')}
              onClick={() => {
                setNavStatus(3);
                navigate('technology/0');
              }}
            >
                <p className='bold'>03</p>
                <p>TECHNOLOGY</p>
            </li>
          </ul>
        </nav>
      )}
      <nav className='non-mobile'>
        <ul className='navlinks'>
          <li
            className={'navtext' + (navStatus === 0 ? ' active' : '')}
            onClick={() => {
              setNavStatus(0);
              navigate("home");
            }}
          >
              <p className='bold tablet'>00</p>
              <p>HOME</p>
          </li>
          <li
            className={'navtext' + (navStatus === 1 ? ' active' : '')}
            onClick={() => {
              setNavStatus(1);
              navigate("destination");
            }}
          >
              <p className='bold tablet'>01</p>
              <p>DESTINATION</p>
          </li>
          <li
            className={'navtext' + (navStatus === 2 ? ' active' : '')}
            onClick={() => {
              setNavStatus(2);
                navigate("crew/0");
            }}
          >
              <p className='bold tablet'>02</p>
              <p>CREW</p>
          </li>
          <li
            className={'navtext' + (navStatus === 3 ? ' active' : '')}
            onClick={() => {
              setNavStatus(3);
                navigate('technology/0');
            }}
          >
              <p className='bold tablet'>03</p>
              <p>TECHNOLOGY</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
