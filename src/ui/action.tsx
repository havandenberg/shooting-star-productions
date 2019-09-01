import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Scale } from '../types/ui';
import { DivProps, divPropsSet } from './layout';
import th from './theme';

type ActionProps = (
  activeColor: string,
  inactiveColor: string,
  size?: Scale,
) => any;

const getCommonActionProps: (size: Scale) => any = (size = 'big') => ({
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  fontSize: size === 'big' ? th.fontSizes.lg : th.fontSizes.main,
  fontWeight: 500,
  justifyContent: 'center',
  padding: size === 'big' ? [th.spacing.sm, th.spacing.md] : th.spacing.sm,
  position: 'relative',
  textAlign: 'center',
  transition: th.transitions.default,
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  zIndex: 1,
});

const getPrimaryActionProps: ActionProps = (
  activeColor,
  inactiveColor,
  size = 'big',
) => ({
  ...getCommonActionProps(size),
  ':before': {
    background: activeColor,
    backgroundImage: activeColor,
    borderRadius: 'inherit',
    content: '""',
    display: 'block',
    height: '100%',
    left: 0,
    opacity: 0,
    position: 'absolute',
    top: 0,
    transition: th.transitions.default,
    width: '100%',
    zIndex: -1,
  },
  ':hover': {
    ':before': {
      opacity: 1,
    },
  },
  background: inactiveColor,
  color: th.colors.black,
});

const getSecondaryActionProps: ActionProps = (
  activeColor,
  inactiveColor,
  size = 'big',
) => ({
  ...getCommonActionProps(size),
  ':hover': {
    borderColor: activeColor,
  },
  background: th.colors.black,
  border: th.borders.transparent,
  borderColor: inactiveColor,
  color: activeColor,
});

const ButtonPrimary = styled('button')<DivProps & any>(
  ({
    activeColor = th.colors.brand.primary,
    inactiveColor = th.gradients.primary,
    size = 'big',
  }) => ({
    ...getPrimaryActionProps(activeColor, inactiveColor, size),
  }),
  ...divPropsSet,
);

const LinkPrimary = styled(Link)<DivProps & any>(
  ({
    activeColor = th.colors.brand.primary,
    inactiveColor = th.gradients.primary,
    size = 'big',
  }) => ({
    ...getPrimaryActionProps(activeColor, inactiveColor, size),
  }),
  ...divPropsSet,
);

const ButtonSecondary = styled('button')<DivProps & any>(
  ({
    activeColor = th.colors.brand.primary,
    inactiveColor = th.colors.black,
    size = 'small',
  }) => ({
    ...getSecondaryActionProps(activeColor, inactiveColor, size),
  }),
  ...divPropsSet,
);

const LinkSecondary = styled(Link)<DivProps & any>(
  ({
    activeColor = th.colors.brand.primary,
    inactiveColor = th.colors.black,
    size = 'small',
  }) => ({
    ...getSecondaryActionProps(activeColor, inactiveColor, size),
  }),
  ...divPropsSet,
);

export default {
  ButtonPrimary,
  LinkPrimary,
  ButtonSecondary,
  LinkSecondary,
};
