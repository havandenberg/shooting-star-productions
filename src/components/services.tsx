import * as R from 'ramda';
import * as React from 'react';
import styled from '@emotion/styled';
import { Service as ServiceType, services } from '../content/services';
import { LinkPrimary } from '../ui/form/button';
import l, { DivProps } from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { CONTACT_PATH, FEATURED_WORKS_PATH } from '../utils/constants';
import { scrollToId } from '../utils/ui';
import withScroll from './hoc/with-scroll';
import Stars from './stars';
import VideoPlayer from './video-player';

interface ActiveIndicatorProps {
  active: boolean;
  activeColor: string;
}

const ActiveIndicator = styled(l.Div)<DivProps & ActiveIndicatorProps>(
  {
    height: th.spacing.xs,
    transition: th.transitions.default,
    width: th.spacing.xxl,
  },
  ({ active, activeColor }: { active: boolean; activeColor: string }) => ({
    background: active ? activeColor : 'transparent',
  }),
);

const ServiceText = styled(ty.SmallText)({
  textAlign: 'center',
  whiteSpace: 'nowrap',
});

const ServiceWrapper = styled(l.FlexColumn)({
  cursor: 'pointer',
});

const Service = ({
  activeServiceId,
  hoverId,
  onMouseEnter,
  onMouseLeave,
  service,
  setServiceId,
}: {
  activeServiceId: string;
  hoverId: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  service: ServiceType;
  setServiceId: (serviceId: string) => void;
}) => {
  const active =
    R.equals(activeServiceId, service.id) || R.equals(hoverId, service.id);
  const handleServiceClick = () => {
    setServiceId(service.id);
    scrollToId('categories');
  };
  return (
    <ServiceWrapper
      onClick={handleServiceClick}
      mb={th.spacing.sm}
      mx={th.spacing.md}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <l.Img size={th.sizes.lg} src={service.iconSrc} />
      <l.Div height={th.spacing.md} />
      <ServiceText>{service.name}</ServiceText>
      <l.Div height={th.spacing.md} />
      <ActiveIndicator active={active} activeColor={service.activeColor} />
    </ServiceWrapper>
  );
};

interface State {
  serviceId: string;
  hoverId: string;
}

class Services extends React.Component<{}, State> {
  state = {
    hoverId: '',
    serviceId: 'commercial-ads',
  };

  onMouseEnter = (hoverId: string) => {
    this.setState({ hoverId });
  };

  onMouseLeave = () => {
    this.setState({ hoverId: '' });
  };

  setSelectedService = (serviceId: string) => {
    this.setState({ serviceId });
  };

  render() {
    const { hoverId, serviceId } = this.state;

    const serviceProps = {
      activeServiceId: serviceId,
      hoverId: hoverId,
      onMouseLeave: this.onMouseLeave,
    };

    const activeService =
      R.find(
        (service: ServiceType) => R.equals(service.id, serviceId),
        services,
      ) || services[0];

    return (
      <l.FlexColumn my={th.spacing.lg} width="100%">
        <ty.H2 fontSize={th.fontSizes.h3}>
          Videography&nbsp;&nbsp;|&nbsp;&nbsp;Photography
        </ty.H2>
        <ty.LargeText>
          We turn your <l.Gold>vision</l.Gold> into <l.Gold>reality</l.Gold>!
        </ty.LargeText>
        <l.Div height={th.spacing.xl} />
        <l.ScrollFlex id="categories" width={['100%', '90%', '90%']}>
          {services.map((service: ServiceType) => (
            <Service
              key={service.id}
              onMouseEnter={() => this.onMouseEnter(service.id)}
              setServiceId={() => this.setSelectedService(service.id)}
              service={service}
              {...serviceProps}
            />
          ))}
        </l.ScrollFlex>
        <l.Div height={th.spacing.md} />
        <l.FlexCentered
          borderRight={th.borders.red}
          position="relative"
          width="70%">
          <VideoPlayer service={activeService} />
        </l.FlexCentered>
        <l.Div height={th.spacing.xl} />
        <l.PageContent alignItems="center" justifyContent="center">
          <ty.LargeText center>Any other format by request!</ty.LargeText>
          <l.Div height={th.spacing.xxl} />
          <Stars />
          <l.Div height={th.spacing.xxl} />
          <ty.LargeText center>
            <l.Gold>What we do</l.Gold> is make video for business, but{' '}
            <l.Gold>who we are</l.Gold> is a small team of curious people.
            Curious about your business, what makes you special, what you’re
            experts in.
          </ty.LargeText>
          <l.Div height={th.spacing.xl} />
          <ty.LargeText center>
            We want to know the <l.Gold>what</l.Gold>, the <l.Gold>why</l.Gold>,
            the <l.Gold>how</l.Gold> – pick your brain and turn the findings
            into a video.
          </ty.LargeText>
          <l.Div height={th.spacing.xxl} />
          <l.FlexCentered>
            <LinkPrimary to={FEATURED_WORKS_PATH}>
              Testimonials from our clients
            </LinkPrimary>
          </l.FlexCentered>
          <l.Div height={th.spacing.xxl} />
          <Stars />
          <l.Div height={th.spacing.xxl} />
          <ty.H2 fontSize={th.fontSizes.h3} center>
            Ready to Partner?
          </ty.H2>
          <l.Div height={th.spacing.md} />
          <ty.Text center>
            Contact us about your custom media production!
          </ty.Text>
          <l.Div height={th.spacing.xl} />
          <l.FlexCentered>
            <LinkPrimary to={CONTACT_PATH}>Send us a message</LinkPrimary>
          </l.FlexCentered>
          <l.Div height={th.spacing.xxl} />
        </l.PageContent>
      </l.FlexColumn>
    );
  }
}

export default withScroll(Services);
