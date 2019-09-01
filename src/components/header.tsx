import * as React from 'react';
import styled from '@emotion/styled';
import LogoImg from '../assets/images/logo.png';
import StarTrailsImg from '../assets/images/star-trails.svg';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { SERVICES_PATH } from '../utils/constants';

const StarTrails = styled(l.Img)({
  left: -950,
  top: `-${th.sizes.xl}`,
  position: 'absolute',
  [th.breakpointQueries.small]: {
    height: '95%',
    left: -550,
    top: `-${th.sizes.md}`,
  },
});

const Header = () => (
  <>
    <l.Div
      justifyContent="center"
      display="flex"
      mb={th.spacing.lg}
      overflow="hidden"
      width="100%">
      <l.Div position="relative">
        <ty.Link to={SERVICES_PATH}>
          <l.Img size={[125, 160, 200]} src={LogoImg} />
        </ty.Link>
        <StarTrails src={StarTrailsImg} />
      </l.Div>
    </l.Div>
    <ty.Text as="h1" textAlign="center">
      Shooting Star Productions
    </ty.Text>
  </>
);

export default Header;
