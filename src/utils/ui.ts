import { addRem, isNumber } from 'onno-react';
import * as Scroll from 'react-scroll';
import { FontSizes, FontSizesObject } from '../types/ui';
import theme from '../ui/theme';

export const mapFontSizes = (
  baseSize: number,
  fontSizes: FontSizesObject<number>,
): FontSizes => {
  return Object.keys(fontSizes).reduce(
    (acc, key) => {
      const value = fontSizes[key];
      if (isNumber(value)) acc[key] = addRem(value / baseSize);
      return acc;
    },
    { base: fontSizes } as FontSizes,
  );
};

export const scrollToId = (id: string, customOptions?: object) =>
  Scroll.scroller.scrollTo(id, {
    ...theme.scrollOptions,
    ...customOptions,
  });
