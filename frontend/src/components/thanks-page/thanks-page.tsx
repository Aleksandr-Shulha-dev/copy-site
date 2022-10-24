import { FC } from 'react';
import { AppRoute } from '../../common/enums';
import { NavLink } from 'react-router-dom';
import './styles.scss';
 
const ThanksPage: FC = () => {
  return (
    <main className="thanks">
      <div className="thanks__steps">
        В течении 24 часов на указанный email придет письмо с подробной инструкцией.<br/>
        Если письмо не появилось в папке «Входящие», проверьте папку «Спам».<br/>
        Если вы не получили письмо, пожалуйста, обратитесь в тех. поддержку. После получения
        письма:<br/>
        1. Добавьте адрес отправителя в контакты<br/>
        2. Если письмо попало в папку «Спам», выделите его и нажмите «Не спам», чтобы в дальнейшем
        гарантированно получать всю важную информацию по проекту «Quantum Systems».<br/>
        Не забудьте нажать кнопку "Ок"
      </div>
      <NavLink className="thanks__btn" to={AppRoute.MAIN}>на главную</NavLink>
    </main>
  );
}
 
export { ThanksPage };