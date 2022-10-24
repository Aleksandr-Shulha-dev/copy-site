import React, { FC, useState, useRef, useEffect } from 'react';
import firstFeedback from '../../assets/images/viktor.png';
import secondFeedback from '../../assets/images/sergey.png';
import './styles.scss';
 
const Feedback: FC = () => {
  const [isShowVideo, setIsShowVideo] = useState({ first: false, second: false });
  const firstVideo = useRef<HTMLVideoElement | null>(null);
  const secondVideo = useRef<HTMLVideoElement | null>(null);

  const playVideo = (e: React.MouseEvent<HTMLImageElement>) => {
    const { currentTarget } = e;
    setIsShowVideo((state) => ({...state, [currentTarget.id]: true}));
    if(currentTarget.id === "first" && firstVideo) {
      firstVideo.current?.play();
    }

    if(currentTarget.id === "second" && secondVideo) {
      secondVideo.current?.play();
    }
  }

  return (
    <div className="feedback">
      <h3 className='feedback__title '>
        реальные отзывы от действующих пользователей quantum system: 
      </h3>
      <div className="feedback__content">
        <div className="feedback__item flex-column-middle">
          <img
            className={isShowVideo.first ? 'display-none' : ''}
            src={firstFeedback}
            alt="feedback"
            onClick={playVideo}
            id='first'
          />
          <video
            className={isShowVideo.first ? '' : 'display-none'}
            ref={firstVideo}
            controls={true}
          >
            <source src="https://southernne.pl/video/viktor.mp4" type="video/mp4"/>
          </video>
          <span className="feedback__item-title">Виктор Капенков</span>
          <span className="feedback__item-title">Общая прибыль: 67360$</span>
        </div>
        <div className="feedback__item flex-column-middle">
          <img
            className={isShowVideo.second ? 'display-none' : ''}
            src={secondFeedback}
            alt="feedback"
            onClick={playVideo}
            id='second'
          />
          <video
            className={isShowVideo.second ? '' : 'display-none'}
            ref={secondVideo}
            controls={true}
          >
            <source src="https://southernne.pl/video/sergey.mp4" type="video/mp4"/>
          </video>
          <span className="feedback__item-title">Сергей Попов</span>
          <span className="feedback__item-title">Общая прибыль: 193420$</span>
        </div>
      </div>
    </div>
  );
}
 
export { Feedback };