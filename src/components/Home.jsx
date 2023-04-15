import { Link } from 'react-router-dom';
import '../scss/_Home.scss';

export default function Home() {
  return (
    <div className='home-page'>
      <div className='intro'>
        <p className='h5'>SO, YOU WANT TO TRAVEL TO</p>
        <p className='h1'>SPACE</p>
        <p className='body'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className='container'>
        <Link className='explore h3' to={`../destination`}>
          EXPLORE
        </Link>
      </div>
    </div>
  );
}
