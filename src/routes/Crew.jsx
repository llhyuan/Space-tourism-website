import { useEffect, useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { NavContext } from '../routes/Root';
import data from '../data/data.json';
import '../scss/_Crew.scss';

import imgDouglas from '../assets/crew/image-douglas-hurley.webp';
import imgAnousheh from '../assets/crew/image-anousheh-ansari.png';
import imgMark from '../assets/crew/image-mark-shuttleworth.png';
import imgVictor from '../assets/crew/image-victor-glover.webp';

export default function Crew() {
  const { setNavStatus } = useContext(NavContext);
  const crewData = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    setNavStatus(2);
  }, []);

  return (
    <div className='crew'>
      <p className='title h5'>
        <span>02</span>MEET YOUR CREW
      </p>
      <div className='img-container'>
        <img src={crewData['image']} alt={crewData['name']} />
      </div>
      <div className='content-container'>
        <div className='crew-selector'>
          <button
            className={crewData['name'].includes('Douglas') ? 'active' : ''}
            type='button'
            id='Douglas'
            onClick={clickHandler}
          ></button>
          <button
            className={crewData['name'].includes('Mark') ? 'active' : ''}
            type='button'
            id='Mark'
            onClick={clickHandler}
          ></button>
          <button
            className={crewData['name'].includes('Victor') ? 'active' : ''}
            type='button'
            id='Victor'
            onClick={clickHandler}
          ></button>
          <button
            className={crewData['name'].includes('Anousheh') ? 'active' : ''}
            type='button'
            id='Anousheh'
            onClick={clickHandler}
          ></button>
        </div>
        <div className='crew-bio'>
          <p className='position h4'>{crewData['role']}</p>
          <p className='name h3'>{crewData['name']}</p>
          <p className='bio body'>{crewData['bio']}</p>
        </div>
      </div>
    </div>
  );

  function clickHandler(e) {
    switch (e.target.id) {
      case 'Douglas':
        navigate('../crew/0', { replace: true });
        break;
      case 'Mark':
        navigate('../crew/1', { replace: true });
        break;
      case 'Victor':
        navigate('../crew/2', { replace: true });
        break;
      default:
        navigate('../crew/3', { replace: true });
        break;
    }
  }
}

export async function loader({ params }) {
  const crewId = params['crewId'];
  const crewData = data['crew'];

  let imgSrc;
  switch (parseInt(crewId)) {
    case 0:
      imgSrc = imgDouglas;
      break;
    case 1:
      imgSrc = imgMark;
      break;
    case 2:
      imgSrc = imgVictor;
      break;
    case 3:
      imgSrc = imgAnousheh;
  }

  return { ...crewData[crewId], image: imgSrc };
}
