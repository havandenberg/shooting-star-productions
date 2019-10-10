import * as React from 'react';
import services from '../content/services';
import a from '../ui/action';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { isSmall, isTiny } from '../ui/utils';
import { TESTIMONIALS_PATH } from '../utils/constants';
import ContactSection from './contact-section';
import withScroll from './hoc/with-scroll';
import Stars from './stars';
import VideoPlayer from './video-player';

const Services = () => (
  <l.FlexColumn mx="auto" my={th.spacing.lg} width={['90%', '90%', '100%']}>
    <ty.H2
      fontSize={
        isTiny() ? th.fontSizes.sm : [th.fontSizes.main, th.fontSizes.h3]
      }>
      Videography
      <l.Div inline width={[th.spacing.md, th.spacing.lg]} />
      |
      <l.Div inline width={[th.spacing.md, th.spacing.lg]} />
      Photography
    </ty.H2>
    <l.Div height={th.spacing.md} />
    <ty.Text center>
      We turn your <l.Primary>vision</l.Primary> into{' '}
      <l.Primary>reality</l.Primary>!
    </ty.Text>
    <l.Div height={[th.spacing.lg, th.spacing.xl]} />
    <VideoPlayer initialSelectedId="commercial-ads" videos={services} />
    <l.Div height={th.spacing.xl} />
    <l.PageContent>
      <ty.LargeText center>Any other format by request!</ty.LargeText>
      <l.Div height={[th.spacing.xl, th.spacing.xxl]} />
      <Stars />
      <l.Div height={[th.spacing.xl, th.spacing.xxl]} />
      <ty.LargeText center>
        At Shooting Star Production we specialize in helping customers{' '}
        <l.Primary>share their stories</l.Primary> through video. Our team
        utilizes the <l.Primary>latest tools and technology</l.Primary> to make
        sure that we always get the right shot and that the final product is the
        best possible.
      </ty.LargeText>
      <l.Div height={[th.spacing.lg, th.spacing.xl]} />
      <ty.LargeText center>
        We create videos for a <l.Primary>variety of needs</l.Primary> including
        weddings, commercials, real estate ventures, or anything you can think
        of. It is our number one priority to provide the{' '}
        <l.Primary>best service and experience</l.Primary> as possible while we
        help to make our clients' vision a reality.
      </ty.LargeText>
      <l.Div height={[th.spacing.lg, th.spacing.xl]} />
      <ty.LargeText center>
        <l.Primary>Anything you can visualize, we can create!</l.Primary>
      </ty.LargeText>
      <l.Div height={[th.spacing.xl, th.spacing.xxl]} />
      <l.FlexColumn>
        <a.LinkPrimary to={TESTIMONIALS_PATH}>
          Testimonials{isSmall() ? '' : ' from our clients'}
        </a.LinkPrimary>
      </l.FlexColumn>
      <l.Div height={[th.spacing.xl, th.spacing.xxl]} />
      <ContactSection />
    </l.PageContent>
    <l.Div height={[th.spacing.xl, th.spacing.xxl]} />
  </l.FlexColumn>
);

export default withScroll(Services);
