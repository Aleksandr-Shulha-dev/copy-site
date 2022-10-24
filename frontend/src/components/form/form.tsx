import { FC, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AppRoute } from '../../common/enums';
import { MainFormGroup, RegistrationFormGroup } from '../../common/types';
import { useAppSelector } from '../../hooks';
import { useSendMailMutation } from '../../store/query';
import { Input } from '../input/input';
import { InputData } from './common';
import './styles.scss';

interface FormProps{
  isMainPage: boolean
}
 
const Form: FC<FormProps> = ({ isMainPage }) => {
  const { userApi } = useAppSelector((state) => state);
  const [mainFormGroup, setMainFormGroup] = useState<MainFormGroup>({ firstName: userApi.firstName, email: userApi.email});
  const [registrationFormGroup, setRegistrationFormGroup] =
    useState<RegistrationFormGroup>(userApi);
  const navigate = useNavigate();
  const [ sendMail ] = useSendMailMutation();

  useEffect(() => {
    if(registrationFormGroup !== userApi) {
      setRegistrationFormGroup(userApi);
    }
  }, [userApi])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(isMainPage) {
      navigate(AppRoute.REGISTRATION);
    } else {
      sendMail(registrationFormGroup);
      navigate(AppRoute.THANKS);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={ isMainPage ? "form form--max-width" : "form form--min-width"}
      action="#"
    >
      {
        isMainPage ? 
        (<div className="form__field-group">
          <Input 
            {...new InputData('Введите ваше имя', 'text', 'firstName')}
            onChangeValue={setMainFormGroup}
            value={mainFormGroup.firstName}
          />
          <Input
            {...new InputData('Действующий e-mail', 'email', 'email')}
            onChangeValue={setMainFormGroup}
            value={mainFormGroup.email}
          />
        </div>) :
        (<div className="form__field-group">
          <Input
            {...new InputData('Имя', 'text', 'firstName')}
            value={registrationFormGroup.firstName}
            onChangeValue={setRegistrationFormGroup}
          />
          <Input
            {...new InputData('Фамилия', 'text', 'lastName')}
            value={registrationFormGroup.lastName}
            onChangeValue={setRegistrationFormGroup}
          />
          <Input
            {...new InputData('Email', 'email', 'email')}
            value={registrationFormGroup.email}
            onChangeValue={setRegistrationFormGroup}
          />
          <Input
            {...new InputData('+380 50 504 20 02', 'tel', 'tel')}
            value={registrationFormGroup.tel}
            onChangeValue={setRegistrationFormGroup}
          />
        </div>)
      }
      { isMainPage || (
        <p className="rules">
          Нажимая "Получить доступ", вы подтверждаете, что ознакомились и полностью понимаете
          <a className="rules__link" href='https://southernne.pl/Agreement.php'>
            &nbsp;Правила Пользования&nbsp;
          </a>
          системой «Quantum System» и выражаете свое согласие с ними.
        </p>
      )}
      <input
        className="btn"
        type="submit"
        value={
          isMainPage ? 
          "да! я хочу получить vip доступ к quantum sustem прямо сейчас" :
          "получить доступ" 
        }
      />
    </form>
  );
}
 
export { Form };