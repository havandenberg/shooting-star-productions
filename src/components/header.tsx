import * as React from 'react';
import styled from '@emotion/styled';
import LogoImg from '../assets/images/logo.png';
import StarTrailsImg from '../assets/images/star-trails.svg';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { SERVICES_PATH } from '../utils/constants';
import Intro from './intro';

const StarTrails = styled(l.Img)({
  left: -800,
  height: 100,
  top: `-${th.spacing.md}`,
  position: 'absolute',
  width: 800,
  [th.breakpointQueries.small]: {
    height: '95%',
    left: -800,
    top: `-${th.sizes.lg}`,
  },
});

interface Props {
  showIntro: boolean;
  toggleShowIntro: (showIntro: boolean) => void;
}

const Header = ({ showIntro, toggleShowIntro }: Props) => (
  <>
    <l.FlexCentered mb={th.spacing.lg} overflow="hidden" width="100%">
      <l.Div position="relative">
        <ty.Link to={SERVICES_PATH}>
          <l.Img size={[125, 160, 200]} src={LogoImg} />
        </ty.Link>
        <StarTrails src={StarTrailsImg} />
        <l.Div height={th.spacing.sm} />
        <Intro showIntro={showIntro} toggleShowIntro={toggleShowIntro} />
      </l.Div>
    </l.FlexCentered>
    <ty.Text as="h1" textAlign="center">
      Shooting Star Productions
    </ty.Text>
  </>
);

export default Header;
