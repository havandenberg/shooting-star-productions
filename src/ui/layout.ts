import {
  BackgroundSetProps,
  BorderSetProps,
  DisplaySetProps,
  FlexChildSetProps,
  GridChildSetProps,
  LayoutSetProps,
  OpacityProps,
  SpaceSetProps,
  TransformSetProps,
  TransitionProps,
  backgroundSet,
  borderSet,
  displaySet,
  flexChildSet,
  gridChildSet,
  layoutSet,
  opacity,
  spaceSet,
  textSet,
  transformSet,
  transition,
} from 'onno-react';
import styled from './styled';

// Div is the base layout component
export type DivProps = BackgroundSetProps &
  BorderSetProps &
  SpaceSetProps &
  DisplaySetProps &
  FlexChildSetProps &
  GridChildSetProps &
  LayoutSetProps &
  TransformSetProps;

export const Div = styled('div')<DivProps>(
  backgroundSet,
  borderSet,
  displaySet,
  flexChildSet,
  gridChildSet,
  layoutSet,
  spaceSet,
  transformSet,
);

// Div is the base layout component
export type TextProps = SpaceSetProps &
  OpacityProps &
  LayoutSetProps &
  TransformSetProps &
  TransitionProps;

export const Text = styled('div')<TextProps & any>(
  layoutSet,
  opacity,
  spaceSet,
  transition,
  transformSet,
  textSet,
  textSet,
);

export default { Div, Text };
