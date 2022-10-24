import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, FC } from 'react';
import './styles.scss';

interface VolumeBtnProps {
  muteOn: Dispatch<boolean>
  isMuted: boolean
}
 
const VolumeBtn: FC<VolumeBtnProps> = ({ muteOn, isMuted }) => {
  const handleClick = () => {
    muteOn(false);
  }
  return (
    <div
      className={ isMuted ? 'volume': 'display-none'}
      onClick={handleClick}
    >
      <FontAwesomeIcon className="volume__icon" icon={faVolumeHigh} />
      <p className="volume__text">Включить звук</p>
    </div>
  );
}
 
export { VolumeBtn };