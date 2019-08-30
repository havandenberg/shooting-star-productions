import * as Scroll from 'react-scroll';
import theme from '../ui/theme';

export const scrollToId = (id: string, customOptions?: object) =>
  Scroll.scroller.scrollTo(id, {
    ...theme.scrollOptions,
    ...customOptions,
  });
