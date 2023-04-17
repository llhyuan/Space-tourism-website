import vehicleLanscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import vehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import capsuleLanscape from '../assets/technology/image-space-capsule-landscape.jpg';
import capsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';

export default function Picture({ content }) {
  let landscape, portrait;

  switch (content) {
    case 'Launch vehicle':
      landscape = vehicleLanscape;
      portrait = vehiclePortrait;
      break;

    case 'Spaceport':
      landscape = spaceportLandscape;
      portrait = spaceportPortrait;
      break;

    case 'Space capsule':
      landscape = capsuleLanscape;
      portrait = capsulePortrait;
  }

  return (
    <picture>
      <source srcSet={portrait} media='(min-width: 85em)' />
      <img src={landscape} alt='Launch Vehicle' />
    </picture>
  );
}
