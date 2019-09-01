import DroneImg from '../assets/images/drone.svg';
import EventsImg from '../assets/images/events.svg';
import FitnessImg from '../assets/images/fitness.svg';
import HouseImg from '../assets/images/house.svg';
import IdeaImg from '../assets/images/idea.svg';
import SocialMediaImg from '../assets/images/social-media.svg';
import TestImg from '../assets/images/test.png';
import { Video } from '../types/video';
import { ASSETS_PATH } from '../utils/constants';
import {
  COMMERCIAL_ADS,
  CUSTOM_IDEA,
  EVENTS,
  FITNESS_VIDEOS,
  REAL_ESTATE,
  SOCIAL_MEDIA,
} from './categories';

const featuredWorks: Video[] = [
  {
    categoryId: COMMERCIAL_ADS,
    clientName: 'Project / Client Name',
    iconSrc: DroneImg,
    id: 'crunch-fitness',
    name: 'Crunch Fitness',
    testimonial: [
      '“I have had the pleasure of working with Shooting Star Productions for a variety of projects - photo shoots, video shoots, drone footage and filming at a recent conference. Every experience has been top notch!',
      'The photographers and videographers are exceptionally professional and provide their creative insight to insure the best possible photos and videos. I have been very very pleased with all their work and look forward to working on many future projects together!”',
    ],
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    categoryId: FITNESS_VIDEOS,
    clientName: 'Project / Client Name',
    iconSrc: FitnessImg,
    id: 'crunch-fitness-1',
    name: 'Crunch Fitness',
    testimonial: [
      '“I have had the pleasure of working with Shooting Star Productions for a variety of projects - photo shoots, video shoots, drone footage and filming at a recent conference. Every experience has been top notch!',
      'The photographers and videographers are exceptionally professional and provide their creative insight to insure the best possible photos and videos. I have been very very pleased with all their work and look forward to working on many future projects together!”',
    ],
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    categoryId: REAL_ESTATE,
    clientName: 'Project / Client Name',
    iconSrc: HouseImg,
    id: 'crunch-fitness-2',
    name: 'Crunch Fitness',
    testimonial: [
      '“I have had the pleasure of working with Shooting Star Productions for a variety of projects - photo shoots, video shoots, drone footage and filming at a recent conference. Every experience has been top notch!',
      'The photographers and videographers are exceptionally professional and provide their creative insight to insure the best possible photos and videos. I have been very very pleased with all their work and look forward to working on many future projects together!”',
    ],
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    categoryId: EVENTS,
    clientName: 'Project / Client Name',
    iconSrc: EventsImg,
    id: 'crunch-fitness-3',
    name: 'Crunch Fitness',
    testimonial: [
      '“I have had the pleasure of working with Shooting Star Productions for a variety of projects - photo shoots, video shoots, drone footage and filming at a recent conference. Every experience has been top notch!',
      'The photographers and videographers are exceptionally professional and provide their creative insight to insure the best possible photos and videos. I have been very very pleased with all their work and look forward to working on many future projects together!”',
    ],
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    categoryId: SOCIAL_MEDIA,
    clientName: 'Project / Client Name',
    iconSrc: SocialMediaImg,
    id: 'crunch-fitness-4',
    name: 'Crunch Fitness',
    testimonial: [
      '“I have had the pleasure of working with Shooting Star Productions for a variety of projects - photo shoots, video shoots, drone footage and filming at a recent conference. Every experience has been top notch!',
      'The photographers and videographers are exceptionally professional and provide their creative insight to insure the best possible photos and videos. I have been very very pleased with all their work and look forward to working on many future projects together!”',
    ],
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
  {
    categoryId: CUSTOM_IDEA,
    clientName: 'Project / Client Name',
    iconSrc: IdeaImg,
    id: 'crunch-fitness-5',
    name: 'Crunch Fitness',
    testimonial: [
      '“I have had the pleasure of working with Shooting Star Productions for a variety of projects - photo shoots, video shoots, drone footage and filming at a recent conference. Every experience has been top notch!',
      'The photographers and videographers are exceptionally professional and provide their creative insight to insure the best possible photos and videos. I have been very very pleased with all their work and look forward to working on many future projects together!”',
    ],
    videoCover: TestImg,
    videoSrc: `${ASSETS_PATH}/test.mp4`,
  },
];

export default featuredWorks;
