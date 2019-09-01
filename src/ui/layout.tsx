import {
  BackgroundSetProps,
  BorderSetProps,
  DisplaySetProps,
  FlexSetProps,
  GridSetProps,
  HeightProps,
  LayoutSetProps,
  PositionSetProps,
  SizeProps,
  SpaceSetProps,
  TransformSetProps,
  TransitionProps,
  WidthProps,
  backgroundSet,
  borderSet,
  displaySet,
  flexSet,
  gridSet,
  height,
  layoutSet,
  overflow,
  positionSet,
  size,
  spaceSet,
  transformSet,
  transition,
  width,
} from 'onno-react';
import * as R from 'ramda';
import * as React from 'react';
import styled from '@emotion/styled';
import { StyleSet, StyleValue } from '../types/ui';
import th from './theme';

// Div is the base layout component
interface CustomDivProps {
  alignEnd?: boolean;
  alignStart?: boolean;
  columnOnMobile?: boolean;
  columnReverseOnMobile?: boolean;
  grow?: number;
  justifyEnd?: boolean;
  justifyStart?: boolean;
  pointer?: boolean;
  wrap?: boolean;
}
export type DivProps = BackgroundSetProps &
  BorderSetProps &
  SpaceSetProps &
  DisplaySetProps &
  FlexSetProps &
  GridSetProps &
  LayoutSetProps &
  TransformSetProps &
  PositionSetProps &
  CustomDivProps;

const customOptions: (props: CustomDivProps) => any = ({
  alignEnd,
  alignStart,
  columnOnMobile,
  columnReverseOnMobile,
  grow,
  justifyEnd,
  justifyStart,
  pointer,
  wrap,
}) => ({
  alignItems: alignStart ? 'flex-start' : alignEnd ? 'flex-end' : undefined,
  justifyContent: justifyStart
    ? 'flex-start'
    : justifyEnd
    ? 'flex-end'
    : undefined,
  cursor: pointer ? 'pointer' : undefined,
  flexGrow: grow,
  flexWrap: wrap ? 'wrap' : undefined,
  [th.breakpointQueries.small]:
    columnOnMobile || columnReverseOnMobile
      ? { flexDirection: columnReverseOnMobile ? 'column-reverse' : 'column' }
      : {},
});

export const divPropsSet = [
  backgroundSet,
  borderSet,
  displaySet,
  flexSet,
  gridSet,
  layoutSet,
  spaceSet,
  transformSet,
  positionSet,
  customOptions,
];

const Div = styled.div<DivProps & any>(...divPropsSet);
const Span = styled.span<DivProps & any>(...divPropsSet);

const Flex = styled(Div)<DivProps & any>(
  { alignItems: 'center', display: 'flex' },
  ...divPropsSet,
);
const FlexBetween = styled(Flex)<DivProps & any>(
  {
    justifyContent: 'space-between',
  },
  ...divPropsSet,
);
const FlexCentered = styled(Flex)<DivProps & any>(
  {
    justifyContent: 'center',
  },
  ...divPropsSet,
);
const FlexColumn = styled(Flex)<DivProps & any>(
  {
    flexDirection: 'column',
  },
  ...divPropsSet,
);

interface GridProps {
  children: React.ReactNode;
  customStyles?: StyleSet;
  evenSpacing?: boolean;
  id: string;
  itemWidth?: StyleValue;
  columnGap?: StyleValue;
  maxColumns: number;
  wrap?: boolean;
}
const Grid = ({
  children,
  columnGap = 0,
  evenSpacing,
  id,
  itemWidth,
  maxColumns,
  wrap,
  ...rest
}: GridProps & DivProps) => (
  <FlexBetween
    flexWrap={wrap ? 'wrap' : undefined}
    mx={`-${columnGap}`}
    {...rest}>
    {React.Children.map(children, (child, index) => (
      <Div
        key={`${id}-${index}`}
        mx={columnGap}
        width={itemWidth ? itemWidth : undefined}>
        {child}
      </Div>
    ))}
    {/* generates a spacer for each column up to maxColumns to ensure even spacing */}
    {children &&
      evenSpacing &&
      R.times(
        index => <Div key={`${id}-space-${index}`} width={itemWidth} />,
        (Object.keys(children).length % maxColumns) + 2,
      )}
  </FlexBetween>
);

export interface ScrollProps {
  showScrollBar?: boolean;
}
const Scroll = styled(Div)<DivProps & ScrollProps & any>(
  ({ showScrollBar = true }: { showScrollBar: boolean }) => ({
    ...th.scrollStyles(showScrollBar),
  }),
  overflow,
  ...divPropsSet,
);
const ScrollFlex = styled(FlexBetween)<DivProps & ScrollProps & any>(
  ({ showScrollBar = true }: { showScrollBar: boolean }) => ({
    ...th.scrollStyles(showScrollBar),
  }),
  overflow,
  ...divPropsSet,
);

const PageContent = styled(Div)<DivProps & any>(
  {
    maxWidth: th.widths.maxContent,
    margin: '0 auto',
  },
  ...divPropsSet,
);

export type ImgProps = HeightProps & SizeProps & TransitionProps & WidthProps;
const Img = styled.img<ImgProps & any>(height, size, transition, width);

const Primary = styled(Span)<DivProps & any>(
  {
    color: th.colors.brand.primary,
  },
  ...divPropsSet,
);

export default {
  Div,
  Flex,
  FlexBetween,
  FlexCentered,
  FlexColumn,
  Primary,
  Grid,
  Img,
  PageContent,
  Scroll,
  ScrollFlex,
  Span,
};
