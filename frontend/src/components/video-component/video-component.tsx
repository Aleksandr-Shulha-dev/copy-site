import { FC, useState } from 'react';
import { VolumeBtn } from '../volume-btn/volume-btn';
import './styles.scss';

interface VideoComponentProps {
  isVideoOnMainPage: boolean;
  url: string
}
 
const VideoComponent: FC<VideoComponentProps> = ({ isVideoOnMainPage, url }) => {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className={isVideoOnMainPage ? "video-wrapper" : "video-wrapper-min"}>
      <video className="video" autoPlay muted={isMuted}>
        <source src={url} type='video/mp4'/>
      </video>
      <VolumeBtn muteOn={setIsMuted} isMuted={isMuted}/>
    </div>
  );
}
 
export { VideoComponent };