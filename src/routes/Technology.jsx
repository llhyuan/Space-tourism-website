import Picture from '../components/Picture';
import '../scss/_Technology.scss';

export default function Technology() {
  return (
    <div className='technology'>
      <p className='title h5'>
        <span>03</span>SPACE LAUNCH 101
      </p>
      <Picture content={"Launch vehicle"}/>
      <div className='tech-selector'>
        <button className='button active' type='button'>1</button>
        <button className='button' type='button'>2</button>
        <button className='button' type='button'>3</button>
      </div>
      <div className='tech-info'>
        <p className='body'>THE TERMINOLOGY…</p>
        <p className='term h3'>LAUNCH VEHICLE</p>
        <p className='details body'>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch.
        </p>
      </div>
    </div>
  );
}
