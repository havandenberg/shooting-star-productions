import { VideoCategory } from '../types/video';
import th from '../ui/theme';

export const COMMERCIAL_ADS = 'commercial-ads';
export const FITNESS_VIDEOS = 'fitness-videos';
export const REAL_ESTATE = 'real-estate';
export const EVENTS = 'events';
export const SOCIAL_MEDIA = 'social-media';
export const CUSTOM_IDEA = 'custom-idea';

const categories: { [key: string]: VideoCategory } = {
  [COMMERCIAL_ADS]: {
    activeColor: th.colors.brand.redLight,
    frameColor: th.colors.brand.red,
    id: COMMERCIAL_ADS,
    name: 'Commercial Ads',
  },
  [FITNESS_VIDEOS]: {
    activeColor: th.colors.brand.blueLight,
    frameColor: th.colors.brand.blue,
    id: FITNESS_VIDEOS,
    name: 'Fitness Videos',
  },
  [REAL_ESTATE]: {
    activeColor: th.colors.brand.greenLight,
    frameColor: th.colors.brand.green,
    id: REAL_ESTATE,
    name: 'Real Estate',
  },
  [EVENTS]: {
    activeColor: th.colors.brand.orangeLight,
    frameColor: th.colors.brand.orange,
    id: EVENTS,
    name: 'Events',
  },
  [SOCIAL_MEDIA]: {
    activeColor: th.colors.brand.purpleLight,
    frameColor: th.colors.brand.purple,
    id: SOCIAL_MEDIA,
    name: 'Social Media',
  },
  [CUSTOM_IDEA]: {
    activeColor: th.colors.brand.primary,
    frameColor: th.colors.brand.primary,
    id: CUSTOM_IDEA,
    name: 'Your Awesome Idea',
  },
};

export default categories;
