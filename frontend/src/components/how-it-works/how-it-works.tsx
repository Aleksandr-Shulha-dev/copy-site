import { FC } from 'react';
import './styles.scss';
 
const HowItWorks: FC = () => {
  return (
    <div className='how-it-works'>
      <div className="how-it-works__wrapper">
        <h2 className="section-title">как это работает?</h2>
        <video className="how-it-works__video" controls={true}>
          <source src='https://southernne.pl/video/video3.mp4'/>
        </video>
      </div>
    </div>
  );
}
 
export { HowItWorks };