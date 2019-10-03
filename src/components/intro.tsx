import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import React from 'react';
import Modal from 'react-modal';
import LogoImg from '../assets/images/logo.png';
import VideoImg from '../assets/images/video.svg';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { isSmall } from '../ui/utils';
import { ASSETS_PATH } from '../utils/constants';
import Background from './background';

interface Props {
  showIntro: boolean;
  toggleShowIntro: (showIntro: boolean) => void;
}

class Intro extends React.Component<Props> {
  targetElement: Element | undefined = undefined;

  componentDidMount() {
    this.targetElement = document.querySelector('#top') || undefined;
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  render() {
    const { showIntro, toggleShowIntro } = this.props;
    return (
      <div>
        <l.FlexCentered onClick={() => toggleShowIntro(true)} pointer>
          <l.Img height={th.spacing.md} src={VideoImg} />
          <l.Div width={th.spacing.md} />
          <ty.SmallText
            fontFamily={th.fontFamilies.heading}
            fontSize={th.fontSizes.xs}>
            Introduction
          </ty.SmallText>
        </l.FlexCentered>
        <Modal
          appElement={this.targetElement}
          style={{
            content: {
              backgroundColor: th.colors.transparent,
              border: 0,
              borderRadius: th.borderRadii.default,
              height: '80%',
              margin: isSmall()
                ? th.spacing.sm
                : `${th.spacing.xl} ${th.spacing.xxl}`,
              outline: 'none',
              overflow: 'visible',
              position: 'static',
            },
            overlay: {
              alignItems: 'center',
              backgroundColor: `${th.colors.black}C0`,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              left: 0,
              padding: 0,
              position: 'fixed',
              right: 0,
              top: 0,
              zIndex: 1001,
            },
          }}
          isOpen={showIntro}
          onAfterOpen={() => {
            if (this.targetElement) {
              disableBodyScroll(this.targetElement);
            }
          }}
          onAfterClose={() => {
            if (this.targetElement) {
              enableBodyScroll(this.targetElement);
            }
          }}
          onRequestClose={() => toggleShowIntro(false)}>
          <l.Div
            background={th.colors.black}
            height={['auto', 500, 500]}
            mb={th.spacing.md}
            position="relative"
            width={['100%', 'auto', 'auto']}>
            <video autoPlay controls preload="true" height="100%" width="100%">
              <source src={`${ASSETS_PATH}/intro.m4v`} type="video/mp4" />
            </video>
            <l.Div height={th.spacing.lg} />
            <l.FlexCentered onClick={() => toggleShowIntro(false)} pointer>
              <l.Img height={th.sizes.lg} src={LogoImg} />
              <l.Div width={th.spacing.lg} />
              <ty.H2 center fontSize={th.fontSizes.main} mb={0}>
                Enter{isSmall() ? <l.Div /> : ' '}Shooting Star Productions
              </ty.H2>
              <l.Div width={th.spacing.lg} />
              <l.Img height={th.sizes.lg} src={LogoImg} />
            </l.FlexCentered>
          </l.Div>
          <Background />
        </Modal>
      </div>
    );
  }
}

export default Intro;
