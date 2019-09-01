import { background } from 'onno-react';
import * as R from 'ramda';
import * as React from 'react';
import styled from '@emotion/styled';
import PlayImg from '../assets/images/play';
import categories from '../content/categories';
import { Video } from '../types/video';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import VideoSelector from './video-selector';

const PlayIcon = styled(l.Div)({
  bottom: th.spacing.md,
  cursor: 'pointer',
  height: th.sizes.lg,
  left: '50%',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: th.sizes.lg,
  zIndex: 3,
  [th.breakpointQueries.small]: {
    height: th.sizes.sm,
  },
});

const Label = styled(ty.H3)({
  bottom: th.spacing.lg,
  color: th.colors.white,
  position: 'absolute',
  right: th.spacing.lg,
  zIndex: 1,
  [th.breakpointQueries.small]: {
    bottom: th.spacing.sm,
    right: th.spacing.md,
  },
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
  [th.breakpointQueries.small]: {
    height: th.spacing.sm,
  },
});

const RightFrame = styled(Frame)({
  height: '70%',
  width: th.spacing.md,
  [th.breakpointQueries.small]: {
    width: th.spacing.sm,
  },
});

const PlayerWrapper = styled(l.Div)({
  cursor: 'pointer',
  position: 'relative',
});

export interface VideoChildrenProps {
  selectedVideo: Video;
}

interface Props {
  alwaysShowProjectName?: boolean;
  children?(props: VideoChildrenProps): React.ReactNode;
  initialSelectedId?: string;
  videos: Video[];
}

interface State {
  hoverId: string;
  isPlaying: boolean;
  selectedVideoId: string;
}

class VideoPlayer extends React.Component<Props, State> {
  private vid: React.RefObject<HTMLVideoElement>;

  constructor(props: Props) {
    super(props);
    this.vid = React.createRef();
    this.state = {
      hoverId: '',
      selectedVideoId: props.initialSelectedId || props.videos[0].id,
      isPlaying: false,
    };
  }

  onMouseEnter = (hoverId: string) => {
    this.setState({ hoverId });
  };

  onMouseLeave = () => {
    this.setState({ hoverId: '' });
  };

  setSelectedVideo = (selectedVideoId: string) => {
    this.setState({ selectedVideoId }, this.pause);
  };

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
    const { alwaysShowProjectName, children, videos } = this.props;
    const { hoverId, isPlaying, selectedVideoId } = this.state;

    const videoProps = {
      selectedVideoId,
      hoverId: hoverId,
      onMouseLeave: this.onMouseLeave,
    };

    const selectedVideo =
      R.find((video: Video) => R.equals(video.id, selectedVideoId), videos) ||
      videos[0];

    return (
      <l.FlexColumn width="100%">
        <l.ScrollFlex
          id="categories"
          mx={`-${th.spacing.md}`}
          width={['100%', '100%', '90%']}>
          {videos.map((video: Video) => (
            <VideoSelector
              alwaysShowProjectName={alwaysShowProjectName}
              key={video.id}
              onMouseEnter={() => this.onMouseEnter(video.id)}
              setVideoId={() => this.setSelectedVideo(video.id)}
              video={video}
              {...videoProps}
            />
          ))}
        </l.ScrollFlex>
        <l.Div height={[th.spacing.lg, th.spacing.md]} />
        <l.FlexCentered width={['100%', '80%', '65%']}>
          <PlayerWrapper onClick={this.togglePlaying}>
            {!isPlaying && (
              <>
                <Label>{selectedVideo.name}</Label>
                <PlayIcon>
                  <PlayImg
                    color={categories[selectedVideo.categoryId].frameColor}
                    height="100%"
                    width="100%"
                  />
                </PlayIcon>
              </>
            )}
            <video
              controls={isPlaying}
              height="100%"
              preload="true"
              poster={selectedVideo.videoCover}
              ref={this.vid}
              width="100%">
              <source src={selectedVideo.videoSrc} type="video/mp4" />
            </video>
            <BottomFrame
              background={categories[selectedVideo.categoryId].frameColor}
            />
            <RightFrame
              background={categories[selectedVideo.categoryId].frameColor}
            />
          </PlayerWrapper>
        </l.FlexCentered>
        {children && (
          <>
            <l.Div height={th.spacing.xl} />
            {children({ selectedVideo })}
          </>
        )}
      </l.FlexColumn>
    );
  }
}

export default VideoPlayer;
