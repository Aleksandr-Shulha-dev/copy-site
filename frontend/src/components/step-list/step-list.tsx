import { FC } from 'react';
import step1 from '../../assets/images/step-1.png';
import step2 from '../../assets/images/step-2.png';
import step3 from '../../assets/images/step-3.png';
import step4 from '../../assets/images/step-4.png';
import './styles.scss';
 
const StepList: FC = () => {
  return (
    <ul className="steps">
      <li className="steps__item">
        <img src={step1} alt="" className="steps__img" />
        <p className="steps__text">Зарегистрируйтесь</p>
      </li>
      <li className="steps__item">
        <img src={step2} alt="" className="steps__img" />
        <p className="steps__text steps__text--active">Создайте учетную запись</p>
      </li>
      <li className="steps__item">
        <img src={step3} alt="" className="steps__img" />
        <p className="steps__text">Получите доступ к программе</p>
      </li>
      <li className="steps__item">
        <img src={step4} alt="" className="steps__img" />
        <p className="steps__text">Готово!<br/>Получайте прибыль!</p>
      </li>
    </ul>
  );
}
 
export { StepList };