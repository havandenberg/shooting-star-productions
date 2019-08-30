import {
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
} from 'onno';
import { RouterProps } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { divPropsSet } from './layout';
import th from './theme';

// Text is the base typography component
export type TextProps = SpaceSetProps &
  OpacityProps &
  LayoutSetProps &
  TextSetProps &
  TransformSetProps &
  TransitionProps;

const textPropsSet = [
  layoutSet,
  opacity,
  spaceSet,
  transition,
  transformSet,
  textSet,
];

const Text = styled.p<TextProps & any>(
  ({ center }: { center?: boolean }) => ({
    textAlign: center ? 'center' : undefined,
  }),
  ...textPropsSet,
);
const SmallText = styled(Text)<TextProps & any>(
  { fontSize: th.fontSizes.sm },
  ...textPropsSet,
);
const LargeText = styled(Text)<TextProps & any>(
  { fontSize: th.fontSizes.lg },
  ...textPropsSet,
);

const H1 = styled.h1<TextProps & any>(
  ({ center }: { center?: boolean }) => ({
    textAlign: center ? 'center' : undefined,
  }),
  ...textPropsSet,
);
const H2 = styled.h2<TextProps & any>(
  ({ center }: { center?: boolean }) => ({
    textAlign: center ? 'center' : undefined,
  }),
  ...textPropsSet,
);
const H3 = styled.h3<TextProps & any>(
  ({ center }: { center?: boolean }) => ({
    textAlign: center ? 'center' : undefined,
  }),
  ...textPropsSet,
);

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
