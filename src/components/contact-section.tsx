import * as React from 'react';
import a from '../ui/action';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { CONTACT_PATH } from '../utils/constants';
import ContactLinks from './contact-links';
import Stars from './stars';

const ContactSection = () => (
  <l.Div>
    <Stars />
    <l.Div height={[th.spacing.xl, th.spacing.xxl]} />
    <ty.H2 center>Ready to Partner?</ty.H2>
    <l.Div height={th.spacing.lg} />
    <ty.Text center>Contact us about your custom media production!</ty.Text>
    <l.Div height={th.spacing.xl} />
    <l.FlexColumn>
      <a.LinkPrimary to={CONTACT_PATH}>Send us a message</a.LinkPrimary>
    </l.FlexColumn>
    <l.Div height={[th.spacing.xl, th.spacing.xxl]} />
    <Stars />
    <l.Div height={[th.spacing.xl, th.spacing.xxl]} />
    <ContactLinks flexDirection="row" />
  </l.Div>
);

export default ContactSection;
