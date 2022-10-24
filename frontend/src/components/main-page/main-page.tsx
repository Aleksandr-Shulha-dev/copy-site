import { FC } from 'react';
import { Header } from '../header/header';
import { Label } from '../label/label';
import { Main } from '../main/main';
import { config } from './common';
import './styles.scss';
 
const MainPage: FC = () => {
  return (
    <>
      <Header isMainPage={true}/>
      <Main {...config} />
      <Label isLeft={true} />
      <Label isLeft={false} />
    </>
  );
}
 
export { MainPage };