import * as React from 'react';
import LogoImg from '../assets/images/logo.png';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { isSmall, isTabletUp, isTiny, scrollToId } from '../ui/utils';
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
        flexDirection={isTiny() || isTabletUp() ? 'column' : 'row'}
        mb={th.spacing.sm}
        width={['auto', '50%', '30%']}>
        <ty.SmallText>Copyright © 2019</ty.SmallText>
        <l.Div width={th.spacing.xs} />
        <ty.SmallText>Shooting Star Productions</ty.SmallText>
      </l.FlexColumn>
      {isTabletUp() && (
        <ty.Link to={SERVICES_PATH}>
          <l.Img onClick={scrollToId} size={th.sizes.xxl} src={LogoImg} />
        </ty.Link>
      )}
      <l.FlexColumn
        alignEnd={isTabletUp()}
        flexDirection={isTabletUp() ? 'column' : 'row'}
        mb={[th.spacing.md, th.spacing.sm]}
        width={['auto', '50%', '30%']}>
        <ty.SmallText>Developed by</ty.SmallText>
        <l.Div width={th.spacing.xs} />
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
