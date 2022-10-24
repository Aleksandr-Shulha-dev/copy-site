import { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { setUserData } from '../../store/slice';
import { Select } from '../select/select';
import './styles.scss';

interface InputProps {
  icon: string;
  type: string;
  placeholder: string;
  name: string
  value: string;
  onChangeValue: (state: any) => any;
}
 
const Input: FC<InputProps> = ({ icon, type, placeholder, value, onChangeValue, name }) => {
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    onChangeValue((state: any) => ({ ...state, [target.name]: target.value }));
    dispatch(
      setUserData({ field: target.name, value: target.value })
    )
  }
  return (
    <div className='input'>
      { name === "tel" ?
      (<Select onChange={onChangeValue}/>) : 
      (<span className="input__img flex-row-middle">
        <img src={icon} alt="icon for input" />
      </span>)}
      <input
        name={name}
        className="input__field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        min={2} 
        required
      />
    </div>
  );
}
 
export { Input };