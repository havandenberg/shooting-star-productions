import * as R from 'ramda';
import * as React from 'react';
import styled from '@emotion/styled';
import categories from '../content/categories';
import { Video } from '../types/video';
import l, { DivProps } from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { isTabletUp, scrollToId } from '../ui/utils';

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
  return (
    <l.FlexColumn
      onClick={handleServiceClick}
      mb={th.spacing.sm}
      mx={th.spacing.md}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      pointer>
      <l.Img size={[th.sizes.md, th.sizes.lg]} src={video.iconSrc} />
      <l.Div height={th.spacing.md} />
      <ty.SmallText center nowrap>
        {alwaysShowProjectName ? video.name : categories[video.categoryId].name}
      </ty.SmallText>
      {isTabletUp() && (
        <>
          <l.Div height={th.spacing.md} />
          <ActiveIndicator
            active={active}
            activeColor={categories[video.categoryId].activeColor}
          />
        </>
      )}
    </l.FlexColumn>
  );
};

export default VideoSelector;
