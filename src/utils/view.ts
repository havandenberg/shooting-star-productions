const TABLET_BREAKPOINT = 768;
const SMALL_BREAKPOINT = 699;
const TINY_BREAKPOINT = 321;

export const DESKTOP = 'desktop';
export const SMALL = 'small';
export const TABLET = 'tablet';
export const TABLET_DOWN = 'tabletDown';
export const TABLET_UP = 'tabletUp';
export const TINY = 'tiny';

export const isDesktop = () =>
  typeof window !== 'undefined' && window.innerWidth > TABLET_BREAKPOINT;

export const isMobile = () =>
  typeof window !== 'undefined' && window.innerWidth <= TABLET_BREAKPOINT;

export const isSmall = () =>
  typeof window !== 'undefined' && window.innerWidth <= SMALL_BREAKPOINT;

export const isTabletOnly = () =>
  typeof window !== 'undefined' &&
  window.innerWidth <= TABLET_BREAKPOINT &&
  window.innerWidth > SMALL_BREAKPOINT;

export const isTabletUp = () =>
  typeof window !== 'undefined' && window.innerWidth >= SMALL_BREAKPOINT;

export const isTiny = () =>
  typeof window !== 'undefined' && window.innerWidth < TINY_BREAKPOINT;
