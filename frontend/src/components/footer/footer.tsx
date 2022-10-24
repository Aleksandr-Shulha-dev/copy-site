import { FC } from 'react';
import './styles.scss';
 
const Footer: FC = () => {
  return (
    <footer className="footer flex-column-middle">
      <nav className="footer__nav">
        <a className="footer__link" href="mailto:еvgeny@quantumsys.ru">Контакты</a>
        <a className="footer__link" href='https://southernne.pl/Policy.php'>
          Политика конфиденциальности
        </a>
        <a className="footer__link" href='https://southernne.pl/Agreement.php'>
          Пользовательское соглашение
        </a>
      </nav>
      <p className="copyright">Copyright ©2020 – Quantum System Management</p>
    </footer>
  );
}
 
export { Footer };