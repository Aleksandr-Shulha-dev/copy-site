import { FC } from 'react';
import logo from '../../assets/images/logo.png';
import './styles.scss';

interface HeaderProps {
  isMainPage: boolean
}
 
const Header: FC<HeaderProps> = ({ isMainPage }) => {
  return (
    <header className='header flex-row-middle'>
      <img className={isMainPage ? 'logo' : 'logo logo--without-margin'} src={logo} alt="logo" />
      <h3 className={isMainPage ? 'header__text' : 'display-none'}>
        Посмотрите это видео и узнайте, как зарабатывать более $630,820 каждый месяц!
      </h3>
    </header>
  );
}
 
export { Header };