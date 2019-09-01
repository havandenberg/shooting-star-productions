import styled from '@emotion/styled';
import { DivProps, divPropsSet } from './layout';
import th from './theme';

const inputStyles = {
  ':hover': {
    opacity: 1,
  },
  ':placeholder': {
    color: th.colors.gray,
    fontSize: th.fontSizes.lg,
  },
  background: th.colors.black,
  border: 'solid 2px',
  color: th.colors.white,
  flex: 1,
  fontSize: th.fontSizes.lg,
  opacity: 0.8,
  padding: 12,
  transition: th.transitions.default,
  width: ['100%', th.widths.input],
};

const withError = ({ error }: { error?: boolean }) =>
  error
    ? {
        border: th.borders.error,
      }
    : {};

const SelectInput = styled('select')<DivProps & any>(
  {
    ...inputStyles,
    ...th.scrollStyles,
    overflowX: 'visible',
  },
  ...divPropsSet,
  withError,
);

const TextInput = styled('input')<DivProps & any>(
  {
    ...inputStyles,
    ...th.scrollStyles,
    overflowX: 'visible',
  },
  ...divPropsSet,
  withError,
);

const TextArea = styled('textarea')<DivProps & any>(
  {
    ...inputStyles,
    ...th.scrollStyles,
    height: 200,
    overflowX: 'visible',
  },
  ...divPropsSet,
  withError,
);

export default {
  SelectInput,
  TextInput,
  TextArea,
};
