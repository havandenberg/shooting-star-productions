import * as R from 'ramda';
import * as React from 'react';
import styled from '@emotion/styled';
import AddressImg from '../assets/images/earth-globe.svg';
import EmailImg from '../assets/images/email.svg';
import PhoneImg from '../assets/images/phone.svg';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { isTabletOnly, isTabletUp } from '../ui/utils';

const ContactLink = styled(l.FlexColumn)({
  cursor: 'pointer',
});

const ContactText = styled(ty.Text)({
  fontWeight: th.fontWeights.bold,
  marginTop: th.spacing.md,
});

interface Props {
  flexDirection?: string;
}

const ContactLinks = ({ flexDirection = 'column' }: Props) => {
  const address = (
    <a
      href="https://www.google.com/maps/place/50+Franklin+St,+Worcester,+MA+01608/@42.261213,-71.8037655,17z/data=!3m1!4b1!4m5!3m4!1s0x89e406643841ca63:0x8f906e99a7f83c9a!8m2!3d42.2612091!4d-71.8015715"
      rel="noopener noreferrer"
      target="_blank">
      <ContactLink width={['auto', 269]}>
        <l.Img height={th.sizes.md} src={AddressImg} />
        <ContactText center color={th.colors.brand.green} nowrap>
          50 Franklin St
          <br />
          Worcester, MA 01609
        </ContactText>
      </ContactLink>
    </a>
  );
  return (
    <>
      <l.FlexBetween
        alignStart={isTabletUp() && R.equals(flexDirection, 'row')}
        columnOnMobile
        flexDirection={flexDirection}
        mx="auto">
        <a href="tel:11234567890">
          <ContactLink width={['auto', 269]}>
            <l.Img height={th.sizes.md} src={PhoneImg} />
            <ContactText color={th.colors.brand.red} nowrap>
              123-456-7890
            </ContactText>
          </ContactLink>
        </a>
        <l.Div height={th.spacing.xl} />
        <a href="mailto:contact@shooting-star.us">
          <ContactLink width={['auto', 269]}>
            <l.Img height={th.sizes.md} src={EmailImg} />
            <ContactText color={th.colors.brand.blue} nowrap>
              contact@shooting-star.us
            </ContactText>
          </ContactLink>
        </a>
        <l.Div />
        {!isTabletOnly() && (
          <>
            <l.Div height={th.spacing.xl} />
            {address}
          </>
        )}
      </l.FlexBetween>
      {isTabletOnly() && (
        <l.FlexColumn mt={th.spacing.xl}>{address}</l.FlexColumn>
      )}
    </>
  );
};

export default ContactLinks;
