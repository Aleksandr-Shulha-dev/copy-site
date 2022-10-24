import { FC } from 'react';
import { CompanyList } from '../company-list/company-list';
import { VideoComponent } from '../video-component/video-component';
import { Form } from '../form/form';
import './styles.scss';
import { Step } from '../step/step';
import { StepList } from '../step-list/step-list';
import { Congratulations } from '../congratulations/congratulations';
import { Feedback } from '../feedback/feedback';
import { HowItWorks } from '../how-it-works/how-it-works';
import { Faq } from '../faq/faq';

interface MainProps {
  isMainPage: boolean,
  videoUrl: string,
}
 
const Main: FC<MainProps> = ({ isMainPage, videoUrl }) => {
  return (
    <main className="main flex-column-middle">
      <div className="video-container flex-row-middle">
        <VideoComponent
          isVideoOnMainPage={isMainPage}
          url={videoUrl}
        />
      </div>
      { isMainPage || <Step isDashed={false}/>}
      <Form isMainPage={isMainPage}/>
      <CompanyList isOpacity={false}/>
      { isMainPage || (
        <>
          <StepList />
          <div className='second-Wrapper flex-column-middle'>
            <Congratulations />
            <Feedback />
          </div>
          <HowItWorks />
          <Faq />
          <Step isDashed={true} />
          <Form isMainPage={isMainPage}/>
          <h3 className="additional-text">заругистрируйтесь выще, чтобы начать прямо сейчас!</h3>
          <CompanyList isOpacity={true}/>
        </>
      )}
    </main>
  );
}
 
export { Main };