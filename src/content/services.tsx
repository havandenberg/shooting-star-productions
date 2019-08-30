import DroneImg from '../assets/images/drone.svg';
import EventsImg from '../assets/images/events.svg';
import FitnessImg from '../assets/images/fitness.svg';
import HouseImg from '../assets/images/house.svg';
import IdeaImg from '../assets/images/idea.svg';
import SocialMediaImg from '../assets/images/social-media.svg';
import TestImg from '../assets/images/test.png';
import th from '../ui/theme';
import { ASSETS_PATH } from '../utils/constants';

export interface Service {
  activeColor: string;
  frameColor: string;
  iconSrc: string;
  id: string;
  name: string;
  projectName: string;
  videoCover: string;
  videoSrc: string;
}

export const services: Service[] = [
  {
    activeColor: th.colors.brand.redLight,
    frameColor: th.colors.brand.red,
    iconSrc: DroneImg,
    id: 'commercial-ads',
    name: 'Commercial Ads',
    projectName: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    activeColor: th.colors.brand.blueLight,
    frameColor: th.colors.brand.blue,
    iconSrc: FitnessImg,
    id: 'fitness-videos',
    name: 'Fitness Videos',
    projectName: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    activeColor: th.colors.brand.greenLight,
    frameColor: th.colors.brand.green,
    iconSrc: HouseImg,
    id: 'real-estate',
    name: 'Real Estate',
    projectName: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    activeColor: th.colors.brand.orangeLight,
    frameColor: th.colors.brand.orange,
    iconSrc: EventsImg,
    id: 'events',
    name: 'Events',
    projectName: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    activeColor: th.colors.brand.purpleLight,
    frameColor: th.colors.brand.purple,
    iconSrc: SocialMediaImg,
    id: 'social-media',
    name: 'Social Media',
    projectName: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    activeColor: th.colors.brand.primary,
    frameColor: th.colors.brand.primaryDark,
    iconSrc: IdeaImg,
    id: 'custom-idea',
    name: 'Your Awesome Idea',
    projectName: 'Crunch Fitness',
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
];
