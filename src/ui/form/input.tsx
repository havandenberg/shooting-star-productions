import styled from '@emotion/styled';
import { DivProps, divPropsSet } from '../layout';
import th from '../theme';

const inputStyles = {
  ':hover': {
    opacity: 1,
  },
  ':placeholder': {
    color: th.colors.black,
    fontSize: th.fontSizes.lg,
  },
  background: th.colors.black,
  border: th.borders.red,
  color: th.colors.black,
  flex: 1,
  fontSize: th.fontSizes.lg,
  height: th.heights.input,
  opacity: 0.8,
  padding: th.spacing.sm,
  transition: th.transitions.default,
  width: th.widths.input,
  [th.breakpointQueries.small]: {
    width: '100%',
  },
};

export const SelectInput = styled('select')<DivProps & any>(
  {
    ...inputStyles,
    ...th.scrollStyles,
    overflowX: 'visible',
  },
  ...divPropsSet,
);

export const TextInput = styled('input')<DivProps & any>(
  {
    ...inputStyles,
    ...th.scrollStyles,
    overflowX: 'visible',
  },
  ...divPropsSet,
);

export const TextArea = styled('textarea')<DivProps & any>(
  {
    ...inputStyles,
    ...th.scrollStyles,
    height: 200,
    overflowX: 'visible',
  },
  ...divPropsSet,
);
