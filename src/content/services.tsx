import DroneImg from '../assets/images/drone.svg';
import EventsImg from '../assets/images/events.svg';
import FitnessImg from '../assets/images/fitness.svg';
import HouseImg from '../assets/images/house.svg';
import IdeaImg from '../assets/images/idea.svg';
import SocialMediaImg from '../assets/images/social-media.svg';
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
    id: 'commercial-ads',
    name: 'Supercar Promotion',
    videoCover: `${ASSETS_PATH}/auto.png`,
    videoSrc: `${ASSETS_PATH}/auto.m4v`,
  },
  {
    categoryId: FITNESS_VIDEOS,
    iconSrc: FitnessImg,
    id: 'fitness',
    name: 'Impact Fitness',
    videoCover: `${ASSETS_PATH}/impact-fitness.png`,
    videoSrc: `${ASSETS_PATH}/impact-fitness.m4v`,
  },
  {
    categoryId: REAL_ESTATE,
    iconSrc: HouseImg,
    id: 'real-estate',
    name: 'Real Estate',
    videoCover: `${ASSETS_PATH}/real-estate.png`,
    videoSrc: `${ASSETS_PATH}/real-estate.m4v`,
    ...categories.realEstate,
  },
  {
    categoryId: EVENTS,
    iconSrc: EventsImg,
    id: 'events',
    name: '',
    videoCover: '',
    videoSrc: '',
  },
  {
    categoryId: SOCIAL_MEDIA,
    iconSrc: SocialMediaImg,
    id: 'social-media',
    name: '',
    videoCover: '',
    videoSrc: '',
  },
  {
    categoryId: CUSTOM_IDEA,
    iconSrc: IdeaImg,
    id: 'custom',
    name: '',
    videoCover: '',
    videoSrc: '',
  },
];

export default services;
