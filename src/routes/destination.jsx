import { useState, useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import { NavContext } from './Root';
import '../scss/_Destination.scss';
import data from '../data/data.json';

// images
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';

export default function Destination() {
  const { setNavStatus } = useContext(NavContext);
  const [desId, setDesId] = useState(0);
  const desData = useLoaderData();

  const desInfo = desData[desId];
  const planet = desInfo['name'];

  let imgSrc;
  switch (planet) {
    case 'Titan':
      imgSrc = titan;
      break;
    case 'Mars':
      imgSrc = mars;
      break;
    case 'Europa':
      imgSrc = europa;
      break;
    default:
      imgSrc = moon;
  }
  
  useEffect(()=>{
    setNavStatus(1);
  }, []);

  return (
    <div className='destination'>
      <div className='select_des'>
        <p className='h5 title'>
          <span>01</span>PICK YOUR DESTINATION
        </p>
        <img src={imgSrc} alt={planet} />
      </div>
      <div className='des_info'>
        <div className='des_options'>
          <p>
            <button
              className={'navtext navtext-lg' + (desId === 0 ? " active" : "" )}
              type='button'
              onClick={() => {
                setDesId(0);
              }}
            >
              Moon
            </button>
          </p>
          <p>
            <button
             className={'navtext navtext-lg' + (desId === 1 ? " active" : "" )} 
              type='submit'
              onClick={() => {
                setDesId(1);
              }}
            >
              Mars
            </button>
          </p>
          <p>
            <button
             className={'navtext navtext-lg' + (desId === 2 ? " active" : "" )} 
              type='submit'
              onClick={() => {
                setDesId(2);
              }}
            >
              Europa
            </button>
          </p>
          <p>
            <button
             className={'navtext navtext-lg' + (desId === 3 ? " active" : "" )} 
              type='submit'
              onClick={() => {
                setDesId(3);
              }}
            >
              Titan
            </button>
          </p>
        </div>
        <p className='h2'>{planet.toUpperCase()}</p>
        <p className='body'>{desInfo['description']}</p>
        <div className='des_container'>
          <div className='des_distance'>
            <p className='subhead2'>AVG. DISTANCE</p>
            <p className='subhead1'>{desInfo['distance'].toUpperCase()}</p>
          </div>
          <div className='des_time'>
            <p className='subhead2'>EST. TRAVEL TIME</p>
            <p className='subhead1'>{desInfo['travel'].toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  let desData = data['destinations'];

  return desData;
}
