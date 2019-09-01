import * as React from 'react';
import LogoImg from '../assets/images/logo.png';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { isSmall, isTabletUp } from '../ui/utils';
import { SERVICES_PATH } from '../utils/constants';

const Footer = () => (
  <>
    <l.FlexBetween
      alignEnd={isTabletUp()}
      columnReverseOnMobile
      my={th.spacing.md}
      px={th.spacing.md}>
      <l.FlexColumn
        alignStart={isTabletUp()}
        mb={th.spacing.sm}
        width={['100%', '50%', '30%']}>
        <ty.SmallText>Copyright © 2019</ty.SmallText>
        <ty.SmallText>Shooting Star Productions</ty.SmallText>
      </l.FlexColumn>
      {isTabletUp() && (
        <ty.Link to={SERVICES_PATH}>
          <l.Img size={th.sizes.xxl} src={LogoImg} />
        </ty.Link>
      )}
      <l.FlexColumn
        alignEnd={isTabletUp()}
        mb={[th.spacing.md, th.spacing.sm]}
        width={['100%', '50%', '30%']}>
        <ty.SmallText>Developed by</ty.SmallText>
        <ty.SmallText>Halsey Vandenberg</ty.SmallText>
      </l.FlexColumn>
      {isSmall() && (
        <ty.Link mb={th.spacing.md} to={SERVICES_PATH}>
          <l.Img size={th.sizes.xxl} src={LogoImg} />
        </ty.Link>
      )}
    </l.FlexBetween>
  </>
);

export default Footer;
