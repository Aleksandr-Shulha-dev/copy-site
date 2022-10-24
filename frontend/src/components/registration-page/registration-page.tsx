import { FC } from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Main } from '../main/main';
import { Label } from '../label/label';
import { config } from './common';
import './styles.scss';
 
const RegistrationPage: FC = () => {
  return (
    <>
      <Header isMainPage={false}/>
      <Main {...config} />
      <Label isLeft={true} />
      <Label isLeft={false} primeryClass=" primary-class"/>
      <Footer />
    </>
  );
}
 
export { RegistrationPage };