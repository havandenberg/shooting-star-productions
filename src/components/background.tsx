import * as React from 'react';
import styled from '@emotion/styled';
import StarsImg from '../assets/images/stars.png';
import TwinklingImg from '../assets/images/twinkling.png';
import l from '../ui/layout';

const BackgroundWrapper = styled(l.Div)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  display: 'block',
});

const Stars = styled(BackgroundWrapper)({
  background: `#000 url(${StarsImg}) repeat top center`,
  zIndex: -2,
});

const Twinkling = styled(BackgroundWrapper)({
  animation: 'move-twink-back 200s linear infinite',
  background: `transparent url(${TwinklingImg}) repeat top center`,
  zIndex: -1,
});

const Background = () => (
  <>
    <Stars />
    <Twinkling />
  </>
);

export default Background;
