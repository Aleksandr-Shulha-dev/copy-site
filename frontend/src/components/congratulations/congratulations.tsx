import { FC } from 'react';
import './styles.scss';
 
const Congratulations: FC = () => {
  return (
    <div className='congratulations'>
      <h2 className="section-title">поздравляю! вы сделали это!</h2>
      <div className="congratulations__content"></div>
      <div className="congratulations__text-wrapper">
        <div className="congratulations__text">добро пожаловать в quantum system</div>
      </div>
    </div>
  );
}
 
export { Congratulations };