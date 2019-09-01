import DroneImg from '../assets/images/drone.svg';
import EventsImg from '../assets/images/events.svg';
import FitnessImg from '../assets/images/fitness.svg';
import HouseImg from '../assets/images/house.svg';
import IdeaImg from '../assets/images/idea.svg';
import SocialMediaImg from '../assets/images/social-media.svg';
import TestImg from '../assets/images/test.png';
import { Video } from '../types/video';
import { ASSETS_PATH } from '../utils/constants';
import categories, {
  COMMERCIAL_ADS,
  CUSTOM_IDEA,
  EVENTS,
  FITNESS_VIDEOS,
  REAL_ESTATE,
  SOCIAL_MEDIA,
} from './categories';

const services: Video[] = [
  {
    categoryId: COMMERCIAL_ADS,
    iconSrc: DroneImg,
    id: 'crunch-fitness',
    name: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    categoryId: FITNESS_VIDEOS,
    iconSrc: FitnessImg,
    id: 'crunch-fitness-1',
    name: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    categoryId: REAL_ESTATE,
    iconSrc: HouseImg,
    id: 'crunch-fitness-2',
    name: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
    ...categories.realEstate,
  },
  {
    categoryId: EVENTS,
    iconSrc: EventsImg,
    id: 'crunch-fitness-3',
    name: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    categoryId: SOCIAL_MEDIA,
    iconSrc: SocialMediaImg,
    id: 'crunch-fitness-4',
    name: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    categoryId: CUSTOM_IDEA,
    iconSrc: IdeaImg,
    id: 'crunch-fitness-5',
    name: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
];

export default services;
