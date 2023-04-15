import '../scss/_Destination.scss';

// images
import moon from '../assets/destination/image-moon.png';

export default function Destination() {
  return (
    <div className='destination'>
      <div className='select_des'>
        <p className='h5 title'>
          <span>01</span>PICK YOUR DESTINATION
        </p>
        <img src={moon} alt='moon' />
      </div>
      <div className='des_info'>
        <div className='des_options'>
          <p className='navtext navtext-lg'>Des1</p>
          <p className='navtext navtext-lg'>Des2</p>
          <p className='navtext navtext-lg'>Des3</p>
          <p className='navtext navtext-lg'>Des4</p>
        </div>
        <p className='h2'>MOON</p>
        <p className='body'>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className='des_container'>
          <div className='des_distance'>
            <p className='subhead2'>AVG. DISTANCE</p>
            <p className='subhead1'>384,400 KM</p>
          </div>
          <div className='des_time'>
            <p className='subhead2'>EST. TRAVEL TIME</p>
            <p className='subhead1'>3 DAYS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
