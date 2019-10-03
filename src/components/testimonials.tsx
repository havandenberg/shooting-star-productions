import * as React from 'react';
import testimonials from '../content/testimonials';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import ContactSection from './contact-section';
import withScroll from './hoc/with-scroll';
import VideoPlayer, { VideoChildrenProps } from './video-player';

const Testimonials = () => (
  <l.FlexColumn mx="auto" my={th.spacing.lg} width={['90%', '90%', '100%']}>
    <ty.H2 fontSize={th.fontSizes.h3}>Testimonials</ty.H2>
    <l.Div height={[th.spacing.lg, th.spacing.xl]} />
    <VideoPlayer
      alwaysShowProjectName
      initialSelectedId="testimonial-1"
      videos={testimonials}>
      {({ selectedVideo }: VideoChildrenProps) =>
        selectedVideo.clientName && selectedVideo.testimonial ? (
          <l.PageContent>
            <l.FlexColumn>
              <ty.H3>{selectedVideo.clientName || 'Project Name'}</ty.H3>
              <l.Div height={th.spacing.md} />
              {selectedVideo.testimonial.map(
                (segment: string, index: number) => (
                  <React.Fragment
                    key={`${selectedVideo.id}-testimonial-${index}`}>
                    <ty.Text>{segment}</ty.Text>
                    <l.Div height={th.spacing.md} />
                  </React.Fragment>
                ),
              )}
            </l.FlexColumn>
          </l.PageContent>
        ) : (
          <div />
        )
      }
    </VideoPlayer>
    <l.PageContent width="100%">
      <l.Div height={[th.spacing.xl, th.spacing.xl]} />
      <ContactSection />
    </l.PageContent>
    <l.Div height={[th.spacing.xl, th.spacing.xxl]} />
  </l.FlexColumn>
);

export default withScroll(Testimonials);
