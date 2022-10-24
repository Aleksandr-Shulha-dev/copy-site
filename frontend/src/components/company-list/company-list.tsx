import { FC } from 'react';
import company1 from '../../assets/images/trusted-1.png';
import company2 from '../../assets/images/trusted-2.png';
import company3 from '../../assets/images/trusted-3.png';
import company4 from '../../assets/images/trusted-4.png';
import company5 from '../../assets/images/trusted-5.png';
import './styles.scss';

interface CompanyListProps {
  isOpacity: boolean;
}
 
const CompanyList: FC<CompanyListProps> = ({ isOpacity }) => {
  return (
    <ul className='company'>
      <li className="company__item">
        <img
          src={company1}
          alt="trusted company"
          className={ isOpacity ? "company__img company__img--opacity" : "company__img"}
        />
      </li>
      <li className="company__item">
        <img
          src={company2}
          alt="trusted company"
          className={ isOpacity ? "company__img company__img--opacity" : "company__img"}
        />
      </li>
      <li className="company__item">
        <img
          src={company3}
          alt="trusted company"
          className={ isOpacity ? "company__img company__img--opacity" : "company__img"}
        />
      </li>
      <li className="company__item">
        <img
          src={company4}
          alt="trusted company"
          className={ isOpacity ? "company__img company__img--opacity" : "company__img"}
        />
      </li>
      <li className="company__item">
        <img
          src={company5}
          alt="trusted company"
          className={ isOpacity ? "company__img company__img--opacity" : "company__img"}
        />
      </li>
    </ul>
  );
}
 
export { CompanyList };