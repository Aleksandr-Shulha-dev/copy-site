import { FC, useState, useEffect } from 'react';
import { countOnlinePeople, countFreeSlots } from '../../helpers';
import './styles.scss';

interface LabelProps {
  isLeft: boolean;
  primeryClass?: string;
}
 
const Label: FC<LabelProps> = ({ isLeft, primeryClass = "" }) => {
  const [peopleOnline, setPeopleOnline] = useState<number>(countOnlinePeople());
  const [freeSlots, setFreeSlots] = useState<number>(countFreeSlots());

  useEffect(() => {
    if(isLeft) {
      setInterval(() => setPeopleOnline(countOnlinePeople()), 7000);
    } else {
      setInterval(() => setFreeSlots(countFreeSlots()), 15000);
    }
  }, [])

  const clazz = isLeft ? 'left' : 'right';
  const count = isLeft ? peopleOnline : freeSlots;

  return (
    <div className={clazz + ' label' + primeryClass}>
      <div className="label__count flex-row-middle">
        <span>{count}</span>
      </div>
      { isLeft ? 
        (<p className="label__text">
          <span>человек</span> на странице
        </p>) : 
        (<p className="label__text">
          <span>свободных</span> мест
        </p>)
      }
    </div>
  );
}
 
export { Label };