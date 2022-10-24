import { FC, useState } from 'react';
import { RegistrationFormGroup } from '../../common/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setUserData } from '../../store/slice';
import { selectOptionsData } from './common';
import './styles.scss';

interface SelectProps {
  onChange: (state: any) => any;
}
 
const Select: FC<SelectProps> = ({ onChange }) => {
  const dispatch = useAppDispatch();
  const { userApi } = useAppSelector((state) => state)
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const selected = selectOptionsData.find(({ number }) => {
    return userApi.tel.slice(1).startsWith(number)
  });

  const handleClick = () => {
    setIsOpenSelect((state) => !state);
  }

  const handleOptionClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    const countryId = e.currentTarget.getAttribute('for');
    const selected = selectOptionsData.find(({ id }) => id === countryId);
    dispatch(
      setUserData({ field: 'tel', value: `+${selected?.number}` })
    )
    setIsOpenSelect((state) => false);
  }

  return (
    <div className="select flex-row-middle" onClick={handleClick}>
      <div 
        className={isOpenSelect ? "select__title select__title--open" : "select__title select__title--close"}
      >
        <span className={`select__label-span flag ${selected?.id}`}></span>
        <span className="select__label-span">+{selected?.number}</span>
      </div>
      <ul className={isOpenSelect ? "select__options" : "display-none"}>
        {selectOptionsData
          .sort((a, b) => a.country.charCodeAt(0) - b.country.charCodeAt(0))
          .map(({ id, country, number}) => (
            <li className="select__item" key={id}>
              <input className="select__input" type="radio" id={id}/>
              <label
                className="select__label"
                htmlFor={id}
                onClick={handleOptionClick}
              >
                <span className={`select__label-span flag ${id}`}></span>
                <span className="select__label-span">{country}</span>
                <span className="select__label-span number">+{number}</span>
              </label>
            </li>
        ))}
      </ul>
    </div>
  );
}
 
export { Select };