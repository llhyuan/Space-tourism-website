import '../scss/_Crew.scss';
import imgDouglas from '../assets/crew/image-douglas-hurley.webp';

export default function Crew() {
  return (
    <div className='crew'>
      <p className='title h5'>
        <span>02</span>MEET YOUR CREW
      </p>
      <div className='img-container'>
        <img src={imgDouglas} alt='douglas hurley' />
      </div>
      <div className='crew-selector'>
        <button type='button' id='Douglas'></button>
        <button type='button' id='Mark'></button>
        <button type='button' id='Victor'></button>
        <button type='button' id='Anousheh'></button>
      </div>
      <div className='crew-bio'>
        <p className='position h4'>COMMANDER</p>
        <p className='name h3'>DOUGLAS HURLEY</p>
        <p className='bio body'>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
    </div>
  );
}
