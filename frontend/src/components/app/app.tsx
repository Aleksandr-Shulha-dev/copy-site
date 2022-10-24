import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../common/enums';
import { MainPage } from '../main-page/main-page';
import { RegistrationPage } from '../registration-page/registration-page';
import { ThanksPage } from '../thanks-page/thanks-page';
import './styles.scss';
 
const App: FC = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path={AppRoute.MAIN} element={<MainPage />}/>
        <Route path={AppRoute.REGISTRATION} element={<RegistrationPage />}/>
        <Route path={AppRoute.THANKS} element={<ThanksPage />}/>
      </Routes>
    </div>
  );
}
 
export { App };
