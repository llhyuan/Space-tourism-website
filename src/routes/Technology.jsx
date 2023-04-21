import { useContext, useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';

import { NavContext } from './Root';
import data from '../data/data.json';
import Picture from '../components/Picture';
import '../scss/_Technology.scss';

export default function Technology() {
  const techInfo = useLoaderData();
  const navigate = useNavigate();
  const { setNavStatus } = useContext(NavContext);

  useEffect(() => {
    setNavStatus(3);
  }, []);

  return (
    <div className='technology'>
      <p className='title h5'>
        <span>03</span>SPACE LAUNCH 101
      </p>
      <Picture content={techInfo['name']} />
      <div className='tech-selector'>
        <button
          className={
            'button ' + (techInfo['name'].includes('vehicle') ? 'active' : '')
          }
          type='button'
          onClick={() => {
            navigate('../technology/0', { replace: true });
          }}
        >
          1
        </button>
        <button
          className={
            'button ' + (techInfo['name'].includes('port') ? 'active' : '')
          }
          type='button'
          onClick={() => {
            navigate('../technology/1', { replace: true });
          }}
        >
          2
        </button>
        <button
          className={
            'button ' + (techInfo['name'].includes('capsule') ? 'active' : '')
          }
          type='button'
          onClick={() => {
            navigate('../technology/2', { replace: true });
          }}
        >
          3
        </button>
      </div>
      <div className='tech-info'>
        <p className='body'>THE TERMINOLOGY…</p>
        <p className='term h3'>{techInfo['name'].toUpperCase()}</p>
        <p className='details body'>{techInfo['description']}</p>
      </div>
    </div>
  );
}

export function loader({ params }) {
  const termId = params['termId'];
  const techData = data['technology'];

  return techData[termId];
}
