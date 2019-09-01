import * as React from 'react';
import services from '../content/services';
import a from '../ui/action';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { isSmall } from '../ui/utils';
import { FEATURED_WORKS_PATH } from '../utils/constants';
import ContactSection from './contact-section';
import withScroll from './hoc/with-scroll';
import Stars from './stars';
import VideoPlayer from './video-player';

const Services = () => (
  <l.FlexColumn mx="auto" my={th.spacing.lg} width={['90%', '90%', '100%']}>
    <ty.H2 fontSize={th.fontSizes.h3}>
      <l.Primary>Videography</l.Primary>&nbsp;&nbsp;|&nbsp;&nbsp;
      <l.Primary>Photography</l.Primary>
    </ty.H2>
    <ty.LargeText center>
      We turn your <l.Primary>vision</l.Primary> into{' '}
      <l.Primary>reality</l.Primary>!
    </ty.LargeText>
    <l.Div height={[th.spacing.lg, th.spacing.xl]} />
    <VideoPlayer initialSelectedId="commercial-ads" videos={services} />
    <l.Div height={th.spacing.xl} />
    <l.PageContent>
      <ty.LargeText center>Any other format by request!</ty.LargeText>
      <l.Div height={[th.spacing.xl, th.spacing.xl, th.spacing.xxl]} />
      <Stars />
      <l.Div height={[th.spacing.xl, th.spacing.xl, th.spacing.xxl]} />
      <ty.LargeText center>
        <l.Primary>What we do</l.Primary> is make video for business, but{' '}
        <l.Primary>who we are</l.Primary> is a small team of curious people.
        Curious about your business, what makes you special, what you’re experts
        in.
      </ty.LargeText>
      <l.Div height={[th.spacing.lg, th.spacing.lg, th.spacing.xl]} />
      <ty.LargeText center>
        We want to know the <l.Primary>what</l.Primary>, the{' '}
        <l.Primary>why</l.Primary>, the <l.Primary>how</l.Primary> – pick your
        brain and turn the findings into a video.
      </ty.LargeText>
      <l.Div height={[th.spacing.xl, th.spacing.xl, th.spacing.xxl]} />
      <l.FlexColumn>
        <a.LinkPrimary to={FEATURED_WORKS_PATH}>
          Testimonials{isSmall() ? '' : ' from our clients'}
        </a.LinkPrimary>
      </l.FlexColumn>
      <l.Div height={[th.spacing.xl, th.spacing.xl, th.spacing.xxl]} />
      <ContactSection />
    </l.PageContent>
    <l.Div height={[th.spacing.xl, th.spacing.xl, th.spacing.xxl]} />
  </l.FlexColumn>
);

export default withScroll(Services);
