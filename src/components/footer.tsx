import * as React from 'react';
import LogoImg from '../assets/images/logo.png';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { SERVICES_PATH } from '../utils/constants';

const Footer = () => (
  <>
    <l.FlexBetween alignItems="flex-end" my={th.spacing.md} px={th.spacing.md}>
      <l.Div mb={th.spacing.sm} width="30%">
        <ty.SmallText>Copyright © 2019</ty.SmallText>
        <ty.SmallText>Shooting Star Productions</ty.SmallText>
      </l.Div>
      <ty.Link to={SERVICES_PATH}>
        <l.Img size={th.sizes.xxl} src={LogoImg} />
      </ty.Link>
      <l.FlexColumn alignItems="flex-end" mb={th.spacing.sm} width="30%">
        <ty.SmallText>Developed by</ty.SmallText>
        <ty.SmallText>Halsey Vandenberg</ty.SmallText>
      </l.FlexColumn>
    </l.FlexBetween>
  </>
);

export default Footer;
