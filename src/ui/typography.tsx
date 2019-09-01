import {
  CSSProperties,
  LayoutSetProps,
  OpacityProps,
  SpaceSetProps,
  TextSetProps,
  TransformSetProps,
  TransitionProps,
  layoutSet,
  opacity,
  spaceSet,
  textSet,
  transformSet,
  transition,
} from 'onno-react';
import { RouterProps } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { divPropsSet } from './layout';
import th from './theme';

export type TextProps = SpaceSetProps &
  OpacityProps &
  LayoutSetProps &
  TextSetProps &
  TransformSetProps &
  TransitionProps &
  CSSProperties;

const textPropsSet = [
  layoutSet,
  opacity,
  spaceSet,
  transition,
  transformSet,
  textSet,
  ({ bold }: { bold?: boolean }): any => ({
    fontWeight: bold ? 'bold' : undefined,
  }),
  ({ center }: { center?: boolean }): any => ({
    textAlign: center ? 'center' : undefined,
  }),
  ({ italic }: { italic?: boolean }): any => ({
    fontStyle: italic ? 'italic' : undefined,
  }),
  ({ nowrap }: { nowrap?: boolean }): any => ({
    whiteSpace: nowrap ? 'nowrap' : undefined,
  }),
];

const Text = styled.p<TextProps & any>(...textPropsSet);
const SmallText = styled(Text)<TextProps & any>(
  { fontSize: th.fontSizes.sm },
  ...textPropsSet,
);
const LargeText = styled(Text)<TextProps & any>(
  {
    fontSize: th.fontSizes.lg,
    [th.breakpointQueries.small]: { fontSize: th.fontSizes.md },
  },
  ...textPropsSet,
);

const H1 = styled.h1<TextProps & any>(...textPropsSet);
const H2 = styled.h2<TextProps & any>(...textPropsSet);
const H3 = styled.h3<TextProps & any>(...textPropsSet);

const Anchor = styled.a<TextProps & any>(...textPropsSet, ...divPropsSet);
const Link = styled(RouterLink)<RouterProps & TextProps & any>(
  ...textPropsSet,
  ...divPropsSet,
);

export default {
  Anchor,
  H1,
  H2,
  H3,
  LargeText,
  Link,
  SmallText,
  Text,
};
