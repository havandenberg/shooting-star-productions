import StarImg from '../assets/images/star.svg';
import { Video } from '../types/video';
import { ASSETS_PATH } from '../utils/constants';
import { TESTIMONIALS } from './categories';

const testimonials: Video[] = [
  {
    categoryId: TESTIMONIALS,
    clientName: 'John Cokinos',
    iconSrc: StarImg,
    id: 'testimonial-1',
    name: 'John Cokinos',
    videoCover: `${ASSETS_PATH}/auto.png`,
    videoSrc: `${ASSETS_PATH}/auto.m4v`,
  },
];

export default testimonials;
