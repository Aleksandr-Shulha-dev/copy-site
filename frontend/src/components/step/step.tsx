import { FC } from 'react';
import './styles.scss';

interface StepProps {
  isDashed: boolean;
}
 
const Step: FC<StepProps> = ({ isDashed }) => {
  return (
    <div className={ isDashed ? "step-wrapper step-wrapper--dashed" : "step"}>
      <h3 className={ isDashed ? "step step--dashed" : "step"}>
        1 шаг :
      <span> cоздайте учетную запись quantum system  прямо сейчас</span>
      </h3>
    </div>
  );
}
 
export { Step };