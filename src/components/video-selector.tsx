import * as R from 'ramda';
import * as React from 'react';
import categories from '../content/categories';
import { Video } from '../types/video';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { scrollToId } from '../ui/utils';

interface Props {
  alwaysShowProjectName?: boolean;
  hoverId: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  selectedVideoId: string;
  setVideoId: (videoId: string) => void;
  video: Video;
}

const VideoSelector = ({
  alwaysShowProjectName,
  hoverId,
  onMouseEnter,
  onMouseLeave,
  selectedVideoId,
  setVideoId,
  video,
}: Props) => {
  const active =
    R.equals(selectedVideoId, video.id) || R.equals(hoverId, video.id);

  const handleServiceClick = () => {
    setVideoId(video.id);
    scrollToId('categories', { offset: -70 });
  };

  const wrapperProps = R.isEmpty(video.videoSrc)
    ? {}
    : {
        onClick: handleServiceClick,
        onMouseEnter,
        onMouseLeave,
        pointer: true,
      };

  return (
    <l.FlexColumn mb={th.spacing.sm} mx={th.spacing.md} {...wrapperProps}>
      <l.Img size={[th.sizes.md, th.sizes.lg]} src={video.iconSrc} />
      <l.Div height={th.spacing.md} />
      <ty.Text
        center
        color={
          active ? categories[video.categoryId].frameColor : th.colors.white
        }
        nowrap
        transition={th.transitions.default}>
        {alwaysShowProjectName ? video.name : categories[video.categoryId].name}
      </ty.Text>
    </l.FlexColumn>
  );
};

export default VideoSelector;
