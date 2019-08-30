import { background } from 'onno-react';
import * as R from 'ramda';
import * as React from 'react';
import styled from '@emotion/styled';
import PlayImg from '../assets/images/play';
import { Service } from '../content/services';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';

const ControlIcon = styled(l.Div)({
  bottom: th.spacing.md,
  cursor: 'pointer',
  height: th.sizes.lg,
  position: 'absolute',
  width: th.sizes.lg,
  zIndex: 3,
});

const PlayIcon = styled(ControlIcon)({
  left: '50%',
  top: '50%',
  transform: 'translate(-50%)',
  height: th.sizes.lg,
});

const Label = styled(ty.H3)({
  bottom: th.spacing.lg,
  color: th.colors.white,
  position: 'absolute',
  right: th.spacing.lg,
  zIndex: 1,
});

const Frame = styled(l.Div)(
  {
    background: th.colors.brand.primary,
    bottom: `-${th.spacing.sm}`,
    position: 'absolute',
    right: `-${th.spacing.sm}`,
    transition: th.transitions.default,
    zIndex: 2,
  },
  background,
);

const BottomFrame = styled(Frame)({
  height: th.spacing.md,
  width: '70%',
});

const RightFrame = styled(Frame)({
  height: '70%',
  width: th.spacing.md,
});

const PlayerWrapper = styled(l.Div)({
  cursor: 'pointer',
  position: 'relative',
});

interface Props {
  service: Service;
}

interface State {
  isPlaying: boolean;
}

class VideoPlayer extends React.Component<Props, State> {
  private vid: React.RefObject<HTMLVideoElement>;

  constructor(props: Props) {
    super(props);
    this.vid = React.createRef();
    this.state = {
      isPlaying: false,
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (!R.equals(prevProps.service, this.props.service)) {
      this.pause();
    }
    return null;
  }

  pause = () => {
    this.setState({ isPlaying: false }, () => {
      if (this.vid.current) {
        this.vid.current.pause();
      }
    });
  };

  play = () => {
    this.setState({ isPlaying: true }, () => {
      if (this.vid.current) {
        this.vid.current.play();
      }
    });
  };

  togglePlaying = (e: React.MouseEvent) => {
    e.preventDefault();
    if (this.state.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  };

  render() {
    const { service } = this.props;
    const { isPlaying } = this.state;

    return (
      <PlayerWrapper onClick={this.togglePlaying}>
        {!isPlaying && (
          <>
            <Label>{service.projectName}</Label>
            <PlayIcon>
              <PlayImg color={service.frameColor} height="100%" width="100%" />
            </PlayIcon>
          </>
        )}
        <video
          controls={isPlaying}
          height="100%"
          preload="true"
          poster={service.videoCover}
          ref={this.vid}
          width="100%">
          <source src={service.videoSrc} type="video/mp4" />
        </video>
        <BottomFrame background={service.frameColor} />
        <RightFrame background={service.frameColor} />
      </PlayerWrapper>
    );
  }
}

export default VideoPlayer;
